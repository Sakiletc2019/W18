// tokenizer for ts code

export interface Token {
    type: string;
    value: string;
}
// create a token array for store ideentified tokens
export function tokenize(source: string): Token[]{
    const tokens: Token[]=[];
    let currentLine: number = 1; //variable to keep track of the current line number
    let currentColumn: number = 1; //variable to keep track of the current column number

    // simple ragEx based approach for tokenizing the input string or source code
    const tokenPatterns: [RegExp, string][] = [
        [/^[ \t\r]+/, "WHITESPACE"],                   // Matches spaces & tabs (not newlines)
        [/^\n/, "NEWLINE"],                            // Matches newline character
        [/^\/\/.*/, "COMMENT"],                        // Matches single-line comments
        [/^\/\*[\s\S]*?\*\//, "MULTILINE_COMMENT"],    // Matches multi-line comments
        [/^(let|const|var)\b/, "KEYWORD"],             // Matches 'let', 'const', 'var'
        [/^(string|number|boolean)\b/, "TYPE"],        // Matches type keywords
        [/^[a-zA-Z_][a-zA-Z0-9_]*/, "IDENTIFIER"],     // Matches variable names
        [/^:/, "COLON"],                               // Matches ':'
        [/^=/, "ASSIGN"],                              // Matches '='
        [/^"(?:[^"\\]|\\.)*"|^'(?:[^'\\]|\\.)*'/, "LITERAL_STRING"], // Fix string matching
        [/^\d+(\.\d+)?/, "LITERAL_NUMBER"],            // Matches numbers
        [/^(true|TRUE|false|FALSE)\b/, "LITERAL_BOOLEAN"], // Fix boolean matching
        [/^;/, "SEMICOLON"],                           // Matches ';'
    ];

    //loop the source code untill all the characters are tokenized
    while(source.length>0){
        let matched = false; // define matched variable

        //try to match each token to the token list
        for (const [regex, type] of tokenPatterns) {
            const matches = source.match(regex);
            if (matches) {
                if (type !== "WHITESPACE" && type !== "NEWLINE" && type !== "COMMENT") {
                    tokens.push({ type, value: matches[0] });
                }

                //trace newline
                if (type === "NEWLINE") {
                    currentLine++;
                    currentColumn = 1;
                } else {
                    currentColumn += matches[0].length;
                }

                source = source.slice(matches[0].length);
                matched = true;
                break;  //stop checking other patterns once they found 
            }
        }

        if(!matched){
            console.log(
                `Unexpected token or character at line ${currentLine}, column ${currentColumn}; "${source[0]}"`
            );
        }
    }
    return tokens;
}

//Stanalone test
const source = `
let x: string = 'hello';
const PI: number = 3.14;
`;
if (import.meta.main) {
    console.log("Source Code: ", source);
    console.log("Tokens: ", tokenize(source));
};