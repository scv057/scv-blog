#!/usr/bin/env node
/**
 * Scaffold a new post (created as a draft).
 *
 *   npm run new -- "My post title" [--lang en|zh] [--category slug] [--slug custom-slug]
 *
 * Slug is derived from the title for Latin titles; Chinese titles need --slug
 * (or you get a date-based fallback you'll probably want to rename).
 */
import fs from 'node:fs';
import path from 'node:path';

const CATEGORIES = ['engineering', 'ai', 'design', 'workflow', 'essay'];

const args = process.argv.slice(2);
const title = args.find((a) => !a.startsWith('--'));
const opt = (name, fallback) => {
	const i = args.indexOf(`--${name}`);
	return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

if (!title) {
	console.error('Usage: npm run new -- "Post title" [--lang en|zh] [--category slug] [--slug custom-slug]');
	process.exit(1);
}

const lang = opt('lang', 'en');
const category = opt('category', 'essay');
if (!['en', 'zh'].includes(lang)) {
	console.error(`--lang must be en or zh, got: ${lang}`);
	process.exit(1);
}
if (!CATEGORIES.includes(category)) {
	console.error(`--category must be one of ${CATEGORIES.join(', ')}, got: ${category}`);
	process.exit(1);
}

const now = new Date();
const slugFromTitle = title
	.toLowerCase()
	.replace(/[^a-z0-9]+/g, '-')
	.replace(/^-+|-+$/g, '');
const fallback = `post-${now.toISOString().slice(0, 10)}`;
let slug = opt('slug', slugFromTitle || fallback);
if (lang === 'zh' && !slug.endsWith('-zh')) slug += '-zh';

const pubDate = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const file = path.join('src', 'content', 'blog', `${slug}.md`);

if (fs.existsSync(file)) {
	console.error(`Already exists: ${file}`);
	process.exit(1);
}

const frontmatter = `---
title: '${title.replace(/'/g, "''")}'
description: ''
pubDate: '${pubDate}'
lang: ${lang}
category: ${category}
draft: true
---

`;

fs.writeFileSync(file, frontmatter);
console.log(`Created ${file} (draft)`);
console.log('Write it, fill in the description, then flip draft: false to publish.');
