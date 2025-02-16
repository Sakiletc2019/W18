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
    CONSOLE = "CONSOLE", // console
}

const enum KeywordType {
    LET = "let",
    CONST = "const",
    VAR = "var",
}

//define token for lexer to parse the source code into tokens 
export interface Token{
    value: string;
    type: TokenType;
}


function _isSkipChar(src: string): boolean{
    return /^\s+$/.test(src);
}

function token(value = "", type: TokenType):Token{
    return {value, type};
}

const KEYWORD: Record<string, KeywordType> = {
    "let": KeywordType.LET,
};

function _isalpha(src: string): boolean{
    return /^[a-zA-Z]+$/.test(src);
}

function _isdigit(src: string): boolean{
    return /^[0-9]+$/.test(src);
}


function _isboolean(src: string): boolean{
    return /^(true|false)$/.test(src);
}

function _isdelimiter(src: string): boolean{
    return /^;/.test(src);
}

function _isbinaryoperator(src: string): boolean{
    return /^(\+|\-|\*|\/)$/.test(src);
}

function _isdatype(src: string): boolean{
    return /^(number|string|boolean|any|unknown)$/.test(src);
}

function _isassignmentoperator(src: string): boolean{
    return /^=$/.test(src);
}

function _isbracket(src: string): boolean{
    return /^(\[|\]|\{|\}|\(|\))$/.test(src);
}

function _isConsole(src: string): boolean{
    return /^console.log$/.test(src);
}


// define the lexer function
export function tokenize(sourceCode: string): Token[]{
    const tokens = new Array<Token>();
    const src = sourceCode.split(/(\s+|;|\(|\)|\{|\}|\[|\])/).filter(token => token.trim().length > 0);

    while(src.length > 0){
        const tokenValue = src.shift() as string;

        if(_isSkipChar(tokenValue)){
            continue;
        }

        if(KEYWORD[tokenValue]){
            tokens.push(token(tokenValue, TokenType.KEYWORD));
        }else if(_isdatype(tokenValue)){
            tokens.push(token(tokenValue, TokenType.TYPE_ANNOTATION));
        }else if(_isalpha(tokenValue)){
            tokens.push(token(tokenValue, TokenType.IDENTIFIER));
        }else if(_isassignmentoperator(tokenValue)){
            tokens.push(token(tokenValue, TokenType.ASSIGNMENT_OPERATOR));
        }else if(_isbinaryoperator(tokenValue)){
            tokens.push(token(tokenValue, TokenType.BINARY_OPERATOR));
        }else if(_isdigit(tokenValue)){
            tokens.push(token(tokenValue, TokenType.NUMBER));
        }else if(tokenValue == ":"){
            tokens.push(token(tokenValue, TokenType.PUNCTUATION));
        }else if(_isbracket(tokenValue)){
            if (tokenValue === "(") {
                tokens.push(token(tokenValue, TokenType.OpenParenthesis));
            } else if (tokenValue === ")") {
                tokens.push(token(tokenValue, TokenType.CloseParenthesis));
            } else if (tokenValue === "{") {
                tokens.push(token(tokenValue, TokenType.OpenCurlyBraces));
            } else if (tokenValue === "}") {
                tokens.push(token(tokenValue, TokenType.CloseCurlyBraces));
            } else if (tokenValue === "[") {
                tokens.push(token(tokenValue, TokenType.OpenBracket));
            } else if (tokenValue === "]") {
                tokens.push(token(tokenValue, TokenType.CloseBracket));
            }
        }else if(_isboolean(tokenValue)){
            tokens.push(token(tokenValue, TokenType.TYPE_ANNOTATION));
        }else if(_isConsole(tokenValue)){
            tokens.push(token(tokenValue, TokenType.CONSOLE));
        }else if(_isdelimiter(tokenValue)){
            tokens.push(token(tokenValue, TokenType.DELIMITER));
        }else{
            console.error(`\x1b[31mUnexpected token: ${tokenValue}\x1b[0m`);
        }
    }

    return tokens;
}


//standalone test
if (import.meta.main) {
    const sourceCode = await Deno.readTextFile("code.txt");
    for (const token of tokenize(sourceCode)) {
        console.log(token);
    }
}