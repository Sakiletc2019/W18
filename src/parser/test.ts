//import { ASTNode } from "./ast.ts";
import { tokenize, Token as _Token } from "./lexer.ts";
//import { parse } from "./parser.ts";

const source = `let x:string = 'hello';`;

console.log("Source Code: ", source);
console.log("Tokens: ", tokenize(source));