//import { ASTNode } from "./ast.ts";
//import { tokenize, Token as _Token } from "./lexer.ts";
import { parse } from "./parser.ts";

const source = `
let x: string = 'hello';
const PI: number = 3.14;
var y: boolean = true;
`;

console.log("Source Code: ", source);
console.log("Tokens: ", parse(source));