#!/usr/bin/env node
import { greet } from '../src/cli.js';
import { gcdGame } from '../src/games/index.js';

const name = greet();
gcdGame(name);
