import * as fs from 'fs';
import Stream from './Stream';
import { Tokenizer } from './Tokenizer';
import { Parser } from './Parser';

const argv = require('yargs')
  .usage('Usage: $0 -- -i [string] -o [string]')
  .demandOption(['i', 'o'])
  .alias('i', 'input')
  .alias('o', 'output')
  .argv;

const stream = new Stream(argv.i);
const tokenizer = new Tokenizer(stream);
const parser = new Parser(tokenizer);

fs.writeFileSync(argv.o, JSON.stringify(parser.parseTopLevel(),null, 2));
