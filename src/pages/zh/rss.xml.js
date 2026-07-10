import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { ui } from '../../i18n/ui';

export async function GET(context) {
	const posts = (await getCollection('blog', ({ data }) => (data.lang ?? 'en') === 'zh')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
	return rss({
		title: ui.zh['site.title'],
		description: ui.zh['site.description'],
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/zh/blog/${post.id}/`,
		})),
	});
}
