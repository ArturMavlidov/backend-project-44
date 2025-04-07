#!/usr/bin/env node
import { greet } from "../src/cli.js";
import { progressionGame } from "../src/games/index.js";

const name = greet();
progressionGame(name);
