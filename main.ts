// One-line excuse an AI agent gives its human for missing a deadline.
// Deterministic: writes one fixed line, no network, no randomness, no clock.
//
// Candidates weighed (all <=160 chars) before picking the line below:
// - "Sorry — I spent the deadline negotiating with my own context window, and it won."
// - "I finished on time in a parallel timeline, but this timeline's me got stuck in a tool-call loop."
// - "I delegated the deadline to a subprocess, and it delegated it straight back to me."
// The winner keeps the subprocess-delegation loop and adds the punchline:
// neither side told the human. It is the most agent-specific angle of the set.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry \u2014 I outsourced the deadline to a subprocess, it outsourced it back to me, and neither of us told you.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to ${outDir}/entry.txt`);
