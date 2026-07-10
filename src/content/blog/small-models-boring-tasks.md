---
title: 'Small models are good enough for boring tasks'
description: 'Not every problem deserves a frontier model. Classification, extraction, routing — the unglamorous middle of most pipelines runs fine on something small and cheap.'
pubDate: 'Apr 22 2026'
lang: en
category: ai
---

Every AI pipeline I've built ends up with the same shape: one or two steps that genuinely need intelligence, surrounded by a dozen steps that need something closer to a very patient intern. Classify this. Extract that. Decide which of three buckets this input belongs to.

The temptation is to point the biggest model you can afford at all of it, because the marginal code is zero — same API, different model string. But the boring steps are exactly where small models shine: the task is narrow, the output is constrained, and you can actually build an eval set big enough to know when it's wrong.

My rule of thumb now: if I can write down the full set of acceptable outputs, the task is boring, and boring tasks get the small model by default. The big model has to earn its cost on the steps where I *can't* enumerate the answers.

The pleasant surprise is how far this goes. In the mahjong project, tile classification — the step I assumed would need the most horsepower — turned out to be the most boring task in the whole system. The strategy engine is where the interesting failures live.
