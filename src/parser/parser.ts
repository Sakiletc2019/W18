//coverts tokens to AST
import {tokenize, Token as _Token } from "./lexer.ts";
import {ASTNode, VariableDecarationNode} from "./ast.ts";

//Parser: converts tokens to AST
export function parse(source:string):ASTNode{
    const tokens=tokenize(source);

    if (tokens.length < 6){
        throw new Error("in complete statement");
    };

    const [keyowrd, identifier,colon,dataType,assign, value] = tokens;
    if (keyowrd.type !== "KEYWORD" || identifier.type !== "IDENTIFIER" || colon.type !== "COLON" || dataType.type !== "TYPE" || assign.type !== "ASSIGN" || (value.type !== "Literal STRING" && value.type !== "LITERAL NUMBER" && value.type !== "LITERAL BOOLEAN")){
        throw Error("Syntax error in variable declaration");
    };

    const node:VariableDecarationNode={
        type: "VariableDeclaration",
        kind: keyowrd.value as "let" | "const" | "var",
        id: identifier.value,
        datatype: dataType.value as "string" | "number" | "boolean",
        value: value.value //| value.value =="STRING"? value.value.slice(1,-1): parseFloat(value.value)
    };

    return node;

}