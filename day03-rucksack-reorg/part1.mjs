#!/usr/bin/env node
/**
 * run with: ./part1.mjs < input.txt
 */
import * as readline from "node:readline";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input });

let sumOfPriorities = 0;

rl.on("line", (line) => {
  const firstHalf = line.slice(0, line.length / 2);
  const secondHalf = line.slice(line.length / 2);

  const diff = firstHalf.split("").filter((c, i) => secondHalf.indexOf(c) >= 0);
  const firstDiff = diff[0];

  sumOfPriorities +=
    firstDiff.charCodeAt() < 97
      ? firstDiff.charCodeAt() - 38
      : firstDiff.charCodeAt() - 96;
});

rl.once("close", () => {
  console.log(`Sum of priorities is '${sumOfPriorities}'.`);
});
