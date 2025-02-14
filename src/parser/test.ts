<<<<<<< HEAD
import { tokenize, Token as _Token } from "./lexer.ts";
import { parse } from "./parser.ts";

const source = `
const y: number = 10;
`;

console.log("Source Code: ", source);
console.log("Tokens: ", tokenize(source));
console.log("AST: ", parse(source));
=======
//import { ASTNode } from "./ast.ts";
//import { tokenize, Token as _Token } from "./lexer.ts";
import { parse } from "./parser.ts";

const source = `
let x: string = 'hello';
const PI: number = 3.14;
`;

console.log("Source Code: ", source);
console.log("Tokens: ", parse(source));
>>>>>>> 2a827e59e9fb421c52d2c154308349a9d2b0a7e8
