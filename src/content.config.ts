import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

function docsId({ entry, data }: { entry: string; data: Record<string, unknown> }) {
	if (typeof data.slug === 'string') return data.slug;

	let id = entry.replace(/\\/g, '/').replace(/\.(mdx?|mdoc|markdown|mdown|mkdn|mkd|mdwn)$/i, '');
	id = id.replace(/\/index$/, '');
	id = id.replace(/^index$/, '');
	id = id.replace(/^zh-cn\/?/, '').toLowerCase();
	return id || 'index';
}

export const collections = {
	docs: defineCollection({
		loader: docsLoader({
			generateId: docsId,
		}),
		schema: docsSchema(),
	}),
};
