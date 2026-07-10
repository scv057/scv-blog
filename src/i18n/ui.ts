export const languages = {
	en: 'EN',
	zh: '中文',
} as const;

export const defaultLang = 'en';
export const locales = ['en', 'zh'] as const;

export type Lang = keyof typeof ui;

export const ui = {
	en: {
		'site.title': 'Andrew Xie',
		'site.description':
			'Software, systems, and the occasional side quest — written slowly, shipped often.',

		'nav.home': 'Home',
		'nav.writing': 'Writing',
		'nav.about': 'About',
		'theme.dark': 'Dark',
		'theme.light': 'Light',

		'masthead.eyebrow': 'A personal journal',
		'masthead.est': 'Est.',
		'masthead.title.pre': 'Notes from the ',
		'masthead.title.em': 'build',
		'masthead.title.post': ' log.',

		'home.featured': 'Featured',
		'home.recent': 'Recent writing',
		'home.readmore': 'Continue reading →',
		'aside.currently': 'Currently',
		'aside.now.1': 'Building a mahjong strategy engine',
		'aside.now.2': 'Reading source, not tutorials',
		'aside.now.3': 'Learning to write shorter',
		'aside.findme': 'Find me',
		'aside.rss': 'RSS feed',

		'blog.archive': 'The archive',
		'blog.entries': 'entries',
		'blog.title': 'Writing.',
		'blog.empty': 'No posts here yet — check back soon.',

		'article.eyebrow': 'Journal',
		'byline.minRead': 'min read',
		'byline.updated': 'Updated',

		'footer.colophon':
			'Set in a system old-style serif with a monospace for labels. Written by hand, built with Astro, and kept deliberately quiet.',
		'footer.rss': 'RSS',

		'aside.topics': 'Topics',
		'topics.eyebrow': 'Topic',
		'cat.engineering': 'Engineering',
		'cat.ai': 'AI',
		'cat.design': 'Design',
		'cat.workflow': 'Workflow',
		'cat.essay': 'Essays',

		'share.label': 'Share this post',
		'share.copy': 'Copy link',
		'share.copied': 'Copied ✓',
		'share.native': 'Share…',
		'share.wechat': 'WeChat',
		'share.wechatHint': 'Scan in WeChat, then forward or post to Moments.',
		'comments.label': 'Comments',
		'postnav.older': '← Older',
		'postnav.newer': 'Newer →',
		'search.title': 'Search.',
		'search.eyebrow': 'Find anything',
		'nav.search': 'Search',

		'a11y.skip': 'Skip to content',
		'404.eyebrow': 'Error 404',
		'404.title': 'This page wandered off.',
		'404.body': "The link is broken or the page has moved. Let's get you back on the path.",
		'404.home': 'Back to home →',
	},
	zh: {
		'site.title': 'Andrew Xie',
		'site.description': '软件、系统,以及偶尔的支线任务 —— 慢慢写,常常发。',

		'nav.home': '首页',
		'nav.writing': '文章',
		'nav.about': '关于',
		'theme.dark': '深色',
		'theme.light': '浅色',

		'masthead.eyebrow': '个人手记',
		'masthead.est': '始于',
		'masthead.title.pre': '来自',
		'masthead.title.em': '构建日志',
		'masthead.title.post': '的随笔。',

		'home.featured': '精选',
		'home.recent': '近期文章',
		'home.readmore': '继续阅读 →',
		'aside.currently': '最近在做',
		'aside.now.1': '打磨一个麻将策略引擎',
		'aside.now.2': '读源码,而不是教程',
		'aside.now.3': '练习把话写短',
		'aside.findme': '找到我',
		'aside.rss': 'RSS 订阅',

		'blog.archive': '存档',
		'blog.entries': '篇',
		'blog.title': '文章。',
		'blog.empty': '这里还没有文章 —— 敬请期待。',

		'article.eyebrow': '手记',
		'byline.minRead': '分钟阅读',
		'byline.updated': '更新于',

		'footer.colophon':
			'西文用系统老式衬线,标签用等宽字体;中文取宋体系。手写代码,用 Astro 构建,刻意保持安静。',
		'footer.rss': 'RSS',

		'aside.topics': '栏目',
		'topics.eyebrow': '栏目',
		'cat.engineering': '工程',
		'cat.ai': 'AI',
		'cat.design': '设计',
		'cat.workflow': '工作流',
		'cat.essay': '随笔',

		'share.label': '分享这篇文章',
		'share.copy': '复制链接',
		'share.copied': '已复制 ✓',
		'share.native': '系统分享…',
		'share.wechat': '微信',
		'share.wechatHint': '用微信扫码打开,然后转发或分享到朋友圈。',
		'comments.label': '评论',
		'postnav.older': '← 上一篇',
		'postnav.newer': '下一篇 →',
		'search.title': '搜索。',
		'search.eyebrow': '查找内容',
		'nav.search': '搜索',

		'a11y.skip': '跳到正文',
		'404.eyebrow': '错误 404',
		'404.title': '这个页面走丢了。',
		'404.body': '链接失效了,或者页面已经搬走。回到主路上吧。',
		'404.home': '返回首页 →',
	},
} as const;
