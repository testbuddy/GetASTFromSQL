import * as fs from 'fs';
import * as path from 'path';
import Stream from './Stream';
import { Tokenizer } from './Tokenizer';
import { Parser } from './Parser';

const argv = require('yargs')
  .usage('Usage: $0 -- -i [string] -o [string]')
  .demandOption(['i', 'o'])
  .alias('i', 'input')
  .alias('o', 'output')
  .argv;

if (path.extname(argv.i) === '.sql' && path.extname(argv.o) === '.json') {
  const stream = new Stream(argv.i);
  const tokenizer = new Tokenizer(stream);
  const parser = new Parser(tokenizer);
  fs.writeFileSync(argv.o, JSON.stringify(parser.parseTopLevel(),null, 2));
} else {
  throw new Error(`not valid input and/or output`);
}
