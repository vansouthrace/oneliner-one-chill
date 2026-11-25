// One-line horror: the baby monitor speaks in a voice that should no longer exist.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "The baby monitor whispered my name in my mother's voice, and my mother died three years ago.");
