// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Andrew Xie';
export const SITE_DESCRIPTION =
	'Software, systems, and the occasional side quest — written slowly, shipped often.';

// Fixed category set; slugs are language-neutral, display names live in src/i18n/ui.ts
export const CATEGORIES = ['engineering', 'ai', 'design', 'workflow', 'essay'] as const;
export type Category = (typeof CATEGORIES)[number];
