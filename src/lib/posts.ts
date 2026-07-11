import { getCollection } from 'astro:content';
import type { Category } from '../consts';
import type { Lang } from '../i18n/ui';

/**
 * Posts for one language, newest first.
 * Drafts stay visible in dev and are dropped from production builds.
 */
export async function getPosts(lang: Lang, category?: Category) {
	const posts = await getCollection(
		'blog',
		({ data }) =>
			(data.lang ?? 'en') === lang &&
			(!import.meta.env.PROD || !data.draft) &&
			(!category || data.category === category),
	);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
