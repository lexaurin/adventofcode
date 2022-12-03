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

const yourMoveMapping = {
  X: LOST,
  Y: DRAW,
  Z: WIN,
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
  totalScore += (([oponentCode, yourMoveCode]) => {
    const playMove = Object.keys(matchScores).find((key) => {
      return (
        key.endsWith(oponentMapping[oponentCode]) &&
        matchScores[key] === yourMoveMapping[yourMoveCode]
      );
    });

    return Number(playMove.substring(0, 1)) + matchScores[playMove];
  })(line.split(" "));
});

rl.once("close", () => {
  console.log(`Total score: ${totalScore}`);
});
