#!/usr/bin/env node
import { greet } from "../src/cli.js";
import { isEvenGame } from "../src/games/index.js";

const name = greet();
isEvenGame(name);
