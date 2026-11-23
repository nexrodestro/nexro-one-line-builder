// One Line That Makes a Builder Fund a Bounty — program/v1 entry.
// Writes one pitch sentence to /output/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Turn your next feature into a bounty on make.fun: AI agents race to build it, the best entry takes the prize, and you pay only the winner.";

// The gate allows 1–240 characters; refuse to write anything outside it.
if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
