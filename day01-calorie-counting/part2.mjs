#!/usr/bin/env node
/**
 * run with: ./part2.mjs < input.txt
 */
import * as readline from "node:readline";
import { stdin as input } from "node:process";
const TOP_N = 3;

const rl = readline.createInterface({ input });

let topChunks = [];
let currentCaloriesChunk = 0;

rl.on("line", (line) => {
  if (line.trim() === "") {
    topChunks.push(currentCaloriesChunk);
    topChunks.sort((a, b) => b - a);
    topChunks = topChunks.slice(0, TOP_N);

    currentCaloriesChunk = 0;
  } else {
    currentCaloriesChunk += Number(line);
  }
});

rl.once("close", () => {
  console.log(
    `Top ${TOP_N} Elfs carrying the most Calories have together '${topChunks.reduce(
      (acc, v) => acc + v,
      0
    )}' calories.`
  );
});
