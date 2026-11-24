// One Sentence for a Traveler from 1800 (Node 22, standard library only): it writes
// exactly one sentence, explaining the modern internet to a time traveler who has just stepped out of the year 1800, to /output/entry.txt, where the
// gate reads it. The gate wants 1 to 200 characters of UTF-8 text.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SENTENCE =
  'Imagine the libraries, markets, and letters of the whole world joined by invisible wires, so words written in London are read in Boston before the ink is dry.';

if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  console.error(`entry must be 1 to 200 characters, got ${SENTENCE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), SENTENCE, 'utf-8');
