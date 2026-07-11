import rss from '@astrojs/rss';
import { ui } from '../i18n/ui';
import { getPosts } from '../lib/posts';

export async function GET(context) {
	const posts = await getPosts('en');
	return rss({
		title: ui.en['site.title'],
		description: ui.en['site.description'],
		site: context.site,
		items: posts
			.filter((post) => !post.data.draft)
			.map((post) => ({
				...post.data,
				link: `/blog/${post.id}/`,
			})),
	});
}
