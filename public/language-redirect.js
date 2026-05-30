(function () {
	const supportedPrefixes = ['en', 'ja', 'zh-tw'];
	const pathParts = window.location.pathname.split('/').filter(Boolean);
	const firstPart = pathParts[0]?.toLowerCase();

	if (supportedPrefixes.includes(firstPart)) {
		sessionStorage.setItem('preferred-docs-locale', firstPart);
		return;
	}

	if (sessionStorage.getItem('preferred-docs-locale')) return;

	const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
	const preferredLanguage = languages.find(Boolean)?.toLowerCase() || '';

	let locale = 'en';
	if (preferredLanguage.startsWith('zh-cn') || preferredLanguage === 'zh' || preferredLanguage.startsWith('zh-hans')) {
		locale = 'root';
	} else if (preferredLanguage.startsWith('zh-tw') || preferredLanguage.startsWith('zh-hant')) {
		locale = 'zh-tw';
	} else if (preferredLanguage.startsWith('ja')) {
		locale = 'ja';
	} else if (preferredLanguage.startsWith('en')) {
		locale = 'en';
	}

	sessionStorage.setItem('preferred-docs-locale', locale);
	if (locale === 'root') return;

	const nextPath = `/${locale}${window.location.pathname}`;
	window.location.replace(nextPath.replace(/\/{2,}/g, '/') + window.location.search + window.location.hash);
})();
