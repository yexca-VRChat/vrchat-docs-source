# Starlight i18n Implementation

This document explains the multilingual documentation setup used by this Astro Starlight site.

## Goals

The site supports four languages:

| Language            | Content directory         | Public URL |
| ------------------- | ------------------------- | ---------- |
| Simplified Chinese  | `src/content/docs/zh-cn/` | `/`        |
| Traditional Chinese | `src/content/docs/zh-tw/` | `/zh-tw/`  |
| English             | `src/content/docs/en/`    | `/en/`     |
| Japanese            | `src/content/docs/ja/`    | `/ja/`     |

The important compatibility requirement is that Simplified Chinese keeps the original URLs. Existing links such as `/home/`, `/upload/prepare/`, and `/div/vrc_avatar_descriptor/` must continue to work without a `/zh-cn/` prefix.

## Content Layout

All language content lives under language-specific folders:

```text
src/content/docs/
  zh-cn/
  zh-tw/
  en/
  ja/
```

The `zh-cn/` directory contains the original Simplified Chinese documentation. Other language directories contain translated pages with matching relative paths where translations exist.

For example:

```text
src/content/docs/zh-cn/upload/Prepare.md
src/content/docs/zh-tw/upload/prepare.md
src/content/docs/en/upload/prepare.md
src/content/docs/ja/upload/prepare.md
```

Starlight resolves slugs case-insensitively for routes after the custom ID mapping described below, so the original file names can remain mostly unchanged.

## Root Locale Mapping

Starlight normally expects the root locale content to live directly in `src/content/docs/`. Because this project keeps all languages inside language folders, `src/content.config.ts` customizes `docsLoader()` with `generateId`.

The custom ID function removes the `zh-cn/` prefix when Astro loads Simplified Chinese entries:

```ts
function docsId({
  entry,
  data,
}: {
  entry: string;
  data: Record<string, unknown>;
}) {
  if (typeof data.slug === "string") return data.slug;

  let id = entry
    .replace(/\\/g, "/")
    .replace(/\.(mdx?|mdoc|markdown|mdown|mkdn|mkd|mdwn)$/i, "");
  id = id.replace(/\/index$/, "");
  id = id.replace(/^index$/, "");
  id = id.replace(/^zh-cn\/?/, "").toLowerCase();
  return id || "index";
}
```

This means:

```text
src/content/docs/zh-cn/index.mdx       -> index     -> /
src/content/docs/zh-cn/home/index.md   -> home      -> /home/
src/content/docs/zh-cn/upload/Prepare.md -> upload/prepare -> /upload/prepare/
```

Other language folders keep their locale prefix:

```text
src/content/docs/zh-tw/home/index.md -> zh-tw/home -> /zh-tw/home/
src/content/docs/en/home/index.md    -> en/home    -> /en/home/
src/content/docs/ja/home/index.md    -> ja/home    -> /ja/home/
```

## Starlight Locale Configuration

The locale configuration is in `astro.config.mjs`.

```js
defaultLocale: 'root',
locales: {
	root: {
		label: '简体中文',
		lang: 'zh-CN',
	},
	'zh-tw': {
		label: '正體中文',
		lang: 'zh-TW',
	},
	en: {
		label: 'English',
		lang: 'en',
	},
	ja: {
		label: '日本語',
		lang: 'ja',
	},
},
```

The `root` locale is Simplified Chinese and is served from `/`. The `zh-cn/` directory is only an internal content organization detail and is not exposed in public URLs.

## Sidebar Translations

The sidebar is still configured once in `astro.config.mjs`. Helper functions keep translated labels close to the base Simplified Chinese labels:

```js
const translations = (zhTw, en, ja) => ({ "zh-TW": zhTw, en, ja });

const link = (label, slug, zhTw, en, ja) => ({
  label,
  slug,
  translations: translations(zhTw, en, ja),
});
```

Note that sidebar translation keys use the language tag, not the folder name. For Traditional Chinese, the key is `zh-TW`, not `zh-tw`.

If the wrong key is used, the page content may be Traditional Chinese while the sidebar still falls back to Simplified Chinese.

## Browser Language Redirect

The file `public/language-redirect.js` performs first-visit language detection for unprefixed URLs.

Behavior:

| Browser language                  | Redirect target |
| --------------------------------- | --------------- |
| `zh-CN`, `zh-Hans`, or plain `zh` | stay on `/`     |
| `zh-TW` or `zh-Hant`              | `/zh-tw/`       |
| `ja-*`                            | `/ja/`          |
| `en-*`                            | `/en/`          |
| unsupported languages             | `/en/`          |

The script stores `preferred-docs-locale` in `sessionStorage` so manual language switching is not overridden repeatedly during the same session.

Language-prefixed pages are never redirected by this script.

## Adding a Translation

To add a translated page:

1. Find the Simplified Chinese source page under `src/content/docs/zh-cn/`.
2. Create the same relative path under the target language directory.
3. Translate the frontmatter `title` and `description` when present.
4. Translate the page body.
5. Update internal links to include the locale prefix for non-root languages.

Example:

```text
src/content/docs/zh-cn/upload/Prepare.md
src/content/docs/en/upload/prepare.md
src/content/docs/ja/upload/prepare.md
src/content/docs/zh-tw/upload/prepare.md
```

For non-root pages, internal links should stay in the same language:

```md
[Before Uploading](/en/upload/prepare/)
[アップロード前の準備](/ja/upload/prepare/)
[上傳前準備](/zh-tw/upload/prepare/)
```

Root Simplified Chinese links should remain unchanged:

```md
[上传前准备](/upload/prepare/)
```

## Fallback Pages

Starlight generates fallback pages for missing translations. If a page exists in `zh-cn/` but not in `en/`, `ja/`, or `zh-tw/`, the localized route can still be generated using the default Simplified Chinese content.

This allows translation work to happen incrementally.

## Local Development

This repository may not have a local Node.js installation. For local debugging on machines without Node.js, use the project-local `env/` directory. The `env/` folder is ignored by Git.

Useful checks:

```sh
npm run build
```

Expected build behavior:

- `/` is generated from `src/content/docs/zh-cn/index.mdx`.
- `/zh-tw/`, `/en/`, and `/ja/` are generated from their language directories.
- No `/zh-cn/` output directory is generated.
- Pagefind discovers four languages: `zh-cn`, `zh-tw`, `en`, and `ja`.

## Troubleshooting

### `The slug "home" specified in the Starlight sidebar config does not exist.`

This means Starlight cannot find the root-locale slug expected by the sidebar.

Check:

- `src/content.config.ts` is using the custom `docsId()` function.
- `zh-cn/` is being stripped from IDs.
- `index` pages are mapped correctly.
- The `.astro/` content cache has been cleared after changing the loader.

If this appears in development, stop the dev server, delete `.astro/`, and restart the server.

### Traditional Chinese content appears but the sidebar is Simplified Chinese

Check the sidebar `translations` object in `astro.config.mjs`.

Traditional Chinese sidebar labels must use the `zh-TW` key:

```js
{ 'zh-TW': '上傳', en: 'Upload', ja: 'アップロード' }
```

Using `zh-tw` will not be picked up for sidebar labels.

### Visiting `/` redirects to `/en/`

This can happen when the browser language is not one of the supported Chinese or Japanese language tags. Unsupported languages intentionally default to English.

To test the root Simplified Chinese page directly, open a root route after setting browser language to Simplified Chinese, or temporarily clear `sessionStorage.preferred-docs-locale`.
