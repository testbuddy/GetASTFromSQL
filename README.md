# RIPS Technologies GmbH Task

## TASK: Simple SQL Parser

Develop a handwritten parser that is able to parse SQL commands defined in the "operations.sql" into a simple Abstract Syntax Tree (AST). It does not have to support all features that are available in SQL but only the ones used by the example SQL file.

## Supported Keywords are:
USE, SELECT, FROM, WHERE, IS, NOT, NULL, ORDER, BY, INSERT, INTO, VALUES, DELETE, FROM, WHERE, XOR, AND, OR, MOD, DIV

not all grammar of the keywords are supported!

## Install

1. git clone https://github.com/testbuddy/GetASTFromSQL.git
2. cd GetASTFromSQL
3. npm install
4. npm run build

## Run

npm start -- -i 'input.sql' -o 'output.json'

input.sql - here the path to input file

output.json - here the path to the output file

-- very important **dont skip**!
