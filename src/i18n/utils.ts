import { defaultLang, locales, ui, type Lang } from './ui';

export type { Lang } from './ui';

/** Derive the active language from a URL pathname (e.g. /zh/about -> 'zh'). */
export function getLangFromUrl(url: URL): Lang {
	const [, seg] = url.pathname.split('/');
	if ((locales as readonly string[]).includes(seg)) return seg as Lang;
	return defaultLang as Lang;
}

/** Translator bound to a language, with a safe fallback to the default language. */
export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

/** The current pathname with any locale prefix stripped (always starts with '/'). */
export function stripLocale(pathname: string): string {
	const rest = pathname.replace(
		new RegExp(`^/(${locales.join('|')})(?=/|$)`),
		'',
	);
	return rest === '' ? '/' : rest;
}

/** Build a localized href for a locale-agnostic path (default locale is unprefixed). */
export function localizedPath(lang: Lang, path: string): string {
	const clean = '/' + path.replace(/^\/+/, '');
	if (lang === defaultLang) return clean === '/' ? '/' : clean;
	return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Localized display name for a category slug (falls back to the slug itself). */
export function categoryLabel(lang: Lang, category: string): string {
	return (ui[lang] as Record<string, string>)[`cat.${category}`] ?? category;
}
