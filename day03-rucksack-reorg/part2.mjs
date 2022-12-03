#!/usr/bin/env node
/**
 * run with: ./part1.mjs < input.txt
 */
import * as readline from "node:readline";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input });

let sumOfPriorities = 0;
let lineNumber = 0;
let groupBuffer = [];

rl.on("line", (line) => {
  lineNumber++;
  groupBuffer.push(line);

  if (lineNumber % 3 === 0) {
    const intersection = groupBuffer.reduce((acc, line) => {
      const intersection = acc.filter((c) => line.indexOf(c) >= 0);
      return intersection;
    }, groupBuffer[0].split(""));

    const firstIntersection = intersection[0];

    sumOfPriorities +=
      firstIntersection.charCodeAt() < 97
        ? firstIntersection.charCodeAt() - 38
        : firstIntersection.charCodeAt() - 96;
    groupBuffer = [];
  }
});

rl.once("close", () => {
  console.log(`Sum of priorities is '${sumOfPriorities}'.`);
});
