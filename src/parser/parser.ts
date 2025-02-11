//coverts tokens to AST
import {tokenize, Token as _Token } from "./lexer.ts";
import {ASTNode, VariableDecarationNode} from "./ast.ts";

//Parser: converts tokens to AST
export function parse(source:string):ASTNode[]{
    const tokens=tokenize(source);
    const ast: ASTNode[] = [];
    let index=0;

    function consume():_Token{
        return tokens[index++];
    }

    function peek():_Token|null{
        return index<tokens.length ? tokens[index]: null;
    }   

    while(index < tokens.length){

        while(peek() && (peek()?.type === "WHITESPACE" || peek()?.type === "NEWLINE" || peek()?.type === "COMMENT")){
            consume();
        }
        
        if (index >= tokens.length) break;

        //Extract variable diclaration tokens
        const keyowrd = consume();
        const identifier = consume();
        const colon = consume();
        const dataType = consume();
        const assign = consume();
        const value = consume();
        const semicolon = consume();

        if (keyowrd.type !== "KEYWORD" ||
            identifier.type !== "IDENTIFIER" || 
            colon.type !== "COLON" || 
            dataType.type !== "TYPE" || 
            assign.type !== "ASSIGN" ||
            (value.type !== "Literal_STRING" && value.type !== "LITERAL_NUMBER" && value.type !== "LITERAL_BOOLEAN") ||
            semicolon.type !== "SEMICOLON" 
        ){
            throw new Error("Syntax error in variable declaration");
        }
    
        let parseValue: string | number | boolean;
        
        if (value.type === "Literal_STRING"){
            parseValue = value.value.slice(1,-1);
        } else if (value.type === "LITERAL_NUMBER"){
            parseValue = parseFloat(value.value);
        } else if (value.type === "LITERAL_BOOLEAN"){
            parseValue = value.value.toLocaleLowerCase() === ("true") ? true : false;
        } else { 
            throw new Error("Invalid value type");
        }

        const node:VariableDecarationNode={
            type: "VariableDeclaration",
            kind: keyowrd.value as "let" | "const" | "var",
            id: identifier.value,
            datatype: dataType.value as "string" | "number" | "boolean",
            value: parseValue,
        };
        ast.push(node);
    }

    return ast;

}

//Stanalone test
const source = `
let x: string = 'hello';
const PI: number = 3.14;
`;
if (import.meta.main){
    console.log("Source Code: ", source);
    console.log("Tokens: ", parse(source));
};
