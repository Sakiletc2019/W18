import { tokenize, Token as _Token } from "./lexer.ts";
import { parse } from "./parser.ts";

const source = `
const y: number = 10;
`;

console.log("Source Code: ", source);
console.log("Tokens: ", tokenize(source));
console.log("AST: ", parse(source));