// build a lexer
/*
Source Code:
let x : number = 10 + 5; //input and variable declaration and initialization step

consoe.log(x); //print/output statement

We brake the source code into tokens
Tokens:
1. KWYWORD: let,
2. IDENTIFIER: x,
3. Punctuation: :,
4. TypeAnnotation: number,
5. AssignmentOperator: =,
6. Number: 10,
7. BinaryOperator: +,
8. Number: 5,
9. Delimiter: ;

10. IDENTIFIER: console,

*/

// define the token type
export enum TokenType {
    KEYWORD = "KEYWORD", //let, const, var
    IDENTIFIER = "IDENTIFIER", //variable name [a-z , A-Z , a-z_A-Z_0-9_ ]
    PUNCTUATION = "PUNCTUATION",    // : 
    TYPE_ANNOTATION = "TYPE_ANNOTATION", // number, string, boolean, any, unknown, CustomType
    ASSIGNMENT_OPERATOR = "ASSIGNMENT_OPERATOR", // =
    OpenParenthesis = "OpenParenthesis", // (
    CloseParenthesis = "CloseParenthesis", // )
    OpenCurlyBraces = "OpenCurlyBraces", // {
    CloseCurlyBraces = "CloseCurlyBraces", // }
    OpenBracket = "OpenBracket", // [
    CloseBracket = "CloseBracket", // ]
    NUMBER = "NUMBER", // 0-9
    BINARY_OPERATOR = "BINARY_OPERATOR", // +, -, *, /, %
    DELIMITER = "DELIMITER", // ;

}

//define token for lexer to parse the source code into tokens 
export interface Token{
    value: string;
    type: TokenType;
}

// define the lexer function
export function tokenize(sourceCode: string): Token[]{
    const tokens = new Array<Token>();
    const src = sourceCode.split(" ");

    while(src.length > 0){
        const token = src.shift();
        if (token !== undefined) {
            if(token === "let" || token === "const" || token === "var"){
                tokens.push({value: token, type: TokenType.KEYWORD});
            }else if(token === ":"){
                tokens.push({value: token, type: TokenType.PUNCTUATION});
            }else if(token === "number" || token === "string" || token === "boolean" || token === "any" || token === "unknown" || token === "CustomType"){
                tokens.push({value: token, type: TokenType.TYPE_ANNOTATION});
            }else if(token === "="){
                tokens.push({value: token, type: TokenType.ASSIGNMENT_OPERATOR});
        }
        else if(token === "("){
            tokens.push({value: token, type: TokenType.OpenParenthesis});
        }else if(token === ")"){
            tokens.push({value: token, type: TokenType.CloseParenthesis});
        }else if(token === "{"){
            tokens.push({value: token, type: TokenType.OpenCurlyBraces});
        }else if(token === "}"){
            tokens.push({value: token, type: TokenType.CloseCurlyBraces});
        }else if(token === "["){
            tokens.push({value: token, type: TokenType.OpenBracket});
        }else if(token === "]"){
            tokens.push({value: token, type: TokenType.CloseBracket});
        }else if(token === ";"){
            tokens.push({value: token, type: TokenType.DELIMITER});
        }else if(token === "+"){
            tokens.push({value: token, type: TokenType.BINARY_OPERATOR});
        }else if(token === "-"){
            tokens.push({value: token, type: TokenType.BINARY_OPERATOR});
        }else if(token === "*"){
            tokens.push({value: token, type: TokenType.BINARY_OPERATOR});
        }   else if(token === "/"){
            tokens.push({value: token, type: TokenType.BINARY_OPERATOR});
        }else if(token === "%"){
            tokens.push({value: token, type: TokenType.BINARY_OPERATOR});
        }else if(!isNaN(parseFloat(token))){
            tokens.push({value: token, type: TokenType.NUMBER});
        }else{
            tokens.push({value: token, type: TokenType.IDENTIFIER});
        }
    }
    }

    return tokens;
}

if(import.meta.main){
    const sourceCode = `let x : number = 10 + 5;`;
    const tokens = tokenize(sourceCode);
    console.log(tokens);
}