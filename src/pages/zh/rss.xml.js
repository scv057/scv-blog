import rss from '@astrojs/rss';
import { ui } from '../../i18n/ui';
import { getPosts } from '../../lib/posts';

export async function GET(context) {
	const posts = await getPosts('zh');
	return rss({
		title: ui.zh['site.title'],
		description: ui.zh['site.description'],
		site: context.site,
		items: posts
			.filter((post) => !post.data.draft)
			.map((post) => ({
				...post.data,
				link: `/zh/blog/${post.id}/`,
			})),
	});
}
