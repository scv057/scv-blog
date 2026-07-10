---
title: 'Pair-building this blog with an AI'
description: 'A plan I had postponed for years, finished in an afternoon: empty directory to a bilingual site in production. Notes on the process — and a few honest faceplants.'
pubDate: 'Jul 10 2026'
lang: en
---

"Start a personal blog" sat on my todo list for years. Every attempt died in the same place: picking a framework, choosing a theme, wiring up deployment — the preparation alone would burn through all the enthusiasm. This time I tried something different: pair with an AI, and reserve myself for the decisions.

The result: one afternoon, from an empty directory to a bilingual site in production.

## Pipeline first, content later

I set exactly one rule before starting: **get the pipeline working first**. Make "change a line → push → live in seconds" real, and fill in the content later. In hindsight this was the best call of the whole project. Once the loop was closed, every change became fast, visible feedback — no pile of unpublished local edits, no fear of shipping.

The trunk of the work went quickly: Astro scaffold, Tailwind, a GitHub repo, a Vercel import — each step one or two commands. The real time went into decisions and rework. More on that below.

## Design: the AI drafts, the human decides

I didn't want a blog that screams "template." So the AI produced four complete design concepts, deliberately different: a minimal reader, a terminal aesthetic, a Swiss-grid poster, and the editorial magazine look you're reading now — stone paper, an oxblood accent, big serif headlines.

The division of labor was the interesting part. The AI made each direction real — clickable, themed, light and dark. My entire contribution was one sentence: "the magazine layout feels right." Once the direction was set, porting the palette, type, and layout into the actual site took about twenty minutes. Choosing between four real, working artifacts beats scrolling a theme marketplace by a wide margin.

## The faceplants

That's the flattering half of the story. Here's the other half, which is probably more useful to anyone trying the same thing.

**A class-name collision.** After launch, the content width was wrong — lines of serif text stretched nearly full-screen. The culprit: my custom `.container` class collided with Tailwind's built-in `container` utility, whose responsive `max-width: 96rem` quietly won the cascade on wide displays. Renamed it `.wrap`, fixed. Lesson: when you use Tailwind, keep your custom class names away from its reserved ones.

**Layout jitter when switching languages.** English and Chinese pages have different heights, so the scrollbar appeared and disappeared — and the centered content jumped sideways with it. One line of `scrollbar-gutter: stable` cured it permanently. You never meet this bug until you actually build a bilingual site.

**Chinese typography is not Latin typography.** A drop cap looks editorial in English and simply wrong on a full-width Chinese glyph; Chinese body text also wants looser leading. The answer was a per-glyph fallback font stack — old-style serif for Latin, Songti for Chinese — plus a small set of `:lang(zh)` adjustments.

## What pairing actually felt like

After an afternoon of this, the division of labor is clear in my head: the AI is fast, but **direction, trade-offs, and taste stay on the human side**. It can hand you four designs at once, but only you know which one feels right. It writes code without hesitation, but someone still has to look at the screen and say "those lines are too long."

The other takeaway: **verification is everything**. After every change — grep the built CSS for the critical rules, poll production until the deploy actually lands. We never skipped those mechanical checks. Trust comes from verification, with humans and with AIs alike.

This is post number one. I'll try to write shorter ones.

---

*This post was drafted by the AI in question (Claude) and reviewed by the author — which, given the subject, seems only fitting.*
