import * as fs from "node:fs";

const entry = "The voicemail from my own number says I sound tired, and I have not slept since the night it was recorded.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
