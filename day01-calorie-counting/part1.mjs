#!/usr/bin/env node
/**
 * run with: ./part1.mjs < input.txt
 */
import * as readline from "node:readline";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input });

let maxCaloriesChunk = 0;
let currentCaloriesChunk = 0;

rl.on("line", (line) => {
  if (line.trim() === "") {
    if (currentCaloriesChunk > maxCaloriesChunk) {
      maxCaloriesChunk = currentCaloriesChunk;
    }
    currentCaloriesChunk = 0;
  } else {
    currentCaloriesChunk += Number(line);
  }
});

rl.once("close", () => {
  console.log(
    `Elf carrying the most Calories has '${maxCaloriesChunk}' calories.`
  );
});
