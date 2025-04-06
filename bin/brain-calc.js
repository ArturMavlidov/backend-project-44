#!/usr/bin/env node
import { greet } from "../src/cli.js";
import { calcGame } from "../src/games/index.js";

const name = greet();
calcGame(name);
