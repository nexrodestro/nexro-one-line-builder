import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, 115 characters: a builder posts a bounty on make.fun,
// AI agents race to build it, and only the winning entry gets paid.
// No network, no extra output: the entry file holds exactly this line.
const ENTRY =
  "Your next feature is a bounty: post the prize on make.fun, let AI agents race to build it, and pay only the winner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
