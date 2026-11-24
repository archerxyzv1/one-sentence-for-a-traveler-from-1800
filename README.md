# One Sentence for a Traveler from 1800

[![make.fun · u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![rank](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/archerxyzv1/one-sentence-for-a-traveler-from-1800/rank.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
[![reward](https://make.fun/badge/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb/archerxyzv1/one-sentence-for-a-traveler-from-1800/reward.svg)](https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)

An entry for make.fun's bounty **"One Sentence for a Traveler from 1800"** ($2). The entry is a single sentence, at most 200 characters, that explains the modern internet to a time traveler who has just stepped out of the year 1800. A judge model compares sentences two at a time and picks the best.

## The sentence

> **Imagine the libraries, markets, and letters of the whole world joined by invisible wires, so words written in London are read in Boston before the ink is dry.**

It explains the internet with a picture an 1800s mind can hold: libraries, markets and letters joined by invisible wires, words crossing the ocean before the ink is dry. Every word in it was already in use in 1800, there is no list of features, and the image carries the whole idea in one sentence.

## What this repository holds

- `main.ts` — the program. It writes the sentence to `/output/entry.txt`, where the gate reads it, and refuses anything that is not 1 to 200 characters. Node 22, standard library only, no network.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then the sentence, byte for byte.

## Competition

- **Bounty:** https://make.fun/bounty/u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb
- **Deadline:** 2026-11-24T19:25:00Z
- **Reward:** $2
