#!/usr/bin/env node
/**
 * run with: ./part1.mjs < input.txt
 */
import * as readline from "node:readline";
import { stdin as input } from "node:process";

const rl = readline.createInterface({ input });

const ROCK = 1; // [points]
const PAPER = 2;
const SCISSORS = 3;

const LOST = 0; // [points]
const DRAW = 3;
const WIN = 6;

const oponentMapping = {
  A: ROCK,
  B: PAPER,
  C: SCISSORS,
};

const youMapping = {
  X: ROCK,
  Y: PAPER,
  Z: SCISSORS,
};

const matchScores = {
  // [you][oponent]
  [`${ROCK}${ROCK}`]: DRAW,
  [`${ROCK}${PAPER}`]: LOST,
  [`${ROCK}${SCISSORS}`]: WIN,
  [`${PAPER}${ROCK}`]: WIN,
  [`${PAPER}${PAPER}`]: DRAW,
  [`${PAPER}${SCISSORS}`]: LOST,
  [`${SCISSORS}${ROCK}`]: LOST,
  [`${SCISSORS}${PAPER}`]: WIN,
  [`${SCISSORS}${SCISSORS}`]: DRAW,
};

let totalScore = 0;

rl.on("line", (line) => {
  totalScore += (([oponentCode, youCode]) =>
    youMapping[youCode] +
    matchScores[`${youMapping[youCode]}${oponentMapping[oponentCode]}`])(
    line.split(" ")
  );
});

rl.once("close", () => {
  console.log(`Total score: ${totalScore}`);
});
