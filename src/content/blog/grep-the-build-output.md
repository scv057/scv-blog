---
title: 'Why I always grep the build output'
description: 'Tests pass, types check, and the page is still wrong. A small habit that catches the gap: verify the artifact, not the source.'
pubDate: 'Mar 14 2026'
lang: en
category: engineering
---

There is a class of bug that survives every check you run before shipping. The types are sound, the tests are green, the linter is silent — and the compiled CSS still ships a rule that loses the cascade to a framework default you forgot existed.

The habit that catches these is embarrassingly low-tech: after every meaningful change, grep the build output for the thing you claim to have changed. Not the source — the artifact. If you added a design token, find it in the compiled stylesheet. If you localized a page, find the translated string in the emitted HTML.

Source code is a promise; the artifact is what actually ships. Most tooling verifies the promise. Almost nothing verifies the delivery, because delivery-side checks are annoying to automate and feel redundant. They are redundant — right up until the day a build plugin, a cascade rule, or a cache makes them not.

Thirty seconds of grep after each change is cheap insurance. I have yet to regret paying it.
