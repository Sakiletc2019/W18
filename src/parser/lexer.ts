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
    const tokenPatterns: [RegExp, string][]=[
        [/^\s+/, "WHITESPACE"],                         // Matches whitespace (space,tab,newline)
        [/^\n/, "NEWLINE"],                             // Matches newline character
        [/^\/\/.*/, "COMMENT"],                         // Matches single line comments
        [/^\/\*[\s\S]*?\*\//, "MULTILINE_COMMENT"],               // Matches multi-line comments
        [/^(let|const|var)\b/, "KEYWORD"],                  // Matches keywords let, const, var
        [/^(string|number|boolean)\b/,"TYPE"],              // Matches type keywords string, number, boolean
        [/^[a-zA-Z_][a-zA-Z0-9_]*/, "IDENTIFIER"],      // Matches Variable names (identifier)
        [/^:/,"COLON"],                                 // Matches colon character (:)
        [/^=/,"ASSIGN"],                                // Matches assignment operator (=)
        [/^"([^"\\]\\.)*"|'([^'\\]|\\.)*'/,"Literal_STRING"],                  // Matches single-quoted (') & double-quoted(") string literals
        [/^\d+(\.\d+)?/,"LITERAL_NUMBER"],                      // Matches integer and floating-point number literals
        [/^true|TRUE|false|FALSE/,"LITERAL_BOOLEAN"],           // Matches boolean literals true, false, TRUE, FALSE
        [/^;/,"SEMICOLON"],                             // Matches semicolon character (;)
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
            throw new Error(
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