#!/usr/bin/env node
import { greet } from '../src/cli.js';
import { primeGame } from '../src/games/index.js';

const name = greet();
primeGame(name);
