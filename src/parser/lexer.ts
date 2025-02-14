// tokenizer for ts code

export interface Token {
    type: string;
    value: string;
}
// create a token array for store ideentified tokens
export function tokenize(source: string): Token[]{
    const tokens: Token[]=[];
<<<<<<< HEAD
    let currentLine : number = 1; //keep trackof line number
    let currentColumn :number =1; //keep track column number
=======
    let currentLine: number = 1; //variable to keep track of the current line number
    let currentColumn: number = 1; //variable to keep track of the current column number
>>>>>>> 2a827e59e9fb421c52d2c154308349a9d2b0a7e8

    // simple ragEx based approach for tokenizing the input string or source code
<<<<<<< HEAD
    const tokenPatterns: [RegExp, string][]=[
        [/^\s+/, "WHITESPACE"],                         // Matches whitespace (space,tab,newline)
        [/^\n/, "NEWLINE"],                             // Matches newline character
<<<<<<< HEAD
        [/^let|const|var/, "KEYWORD"],                  // Matches keywords let, const, var
        [/^string|number|boolean/,"TYPE"],              // Matches type keywords string, number, boolean
=======
        [/^\/\/.*/, "COMMENT"],                         // Matches single line comments
        [/^\/\*[\s\S]*?\*\//, "MULTILINE_COMMENT"],               // Matches multi-line comments
        [/^(let|const|var)\b/, "KEYWORD"],                  // Matches keywords let, const, var
        [/^(string|number|boolean)\b/,"TYPE"],              // Matches type keywords string, number, boolean
>>>>>>> 2a827e59e9fb421c52d2c154308349a9d2b0a7e8
        [/^[a-zA-Z_][a-zA-Z0-9_]*/, "IDENTIFIER"],      // Matches Variable names (identifier)
        [/^:/,"COLON"],                                 // Matches colon character (:)
        [/^=/,"ASSIGN"],                                // Matches assignment operator (=)
        [/^"([^"\\]\\.)*"|'([^'\\]|\\.)*'/,"Literal_STRING"],                  // Matches single-quoted (') & double-quoted(") string literals
        [/^\d+(\.\d+)?/,"LITERAL_NUMBER"],                      // Matches integer and floating-point number literals
        [/^true|TRUE|false|FALSE/,"LITERAL_BOOLEAN"],           // Matches boolean literals true, false, TRUE, FALSE
        [/^;/,"SEMICOLON"],                             // Matches semicolon character (;)
=======
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
>>>>>>> modular
    ];

    //loop the source code untill all the characters are tokenized
    while(source.length>0){
        let matched = false; // define matched variable

        //try to match each token to the token list
        for (const [regex, type] of tokenPatterns) {
            const matches = source.match(regex);
            if (matches) {
<<<<<<< HEAD
                tokenFound = true;  //if token found, set the flag to true                       
                if (type !== "WHITESPACE" && type !== "NEWLINE") {
=======
                if (type !== "WHITESPACE" && type !== "NEWLINE" && type !== "COMMENT") {
>>>>>>> 2a827e59e9fb421c52d2c154308349a9d2b0a7e8
                    tokens.push({ type, value: matches[0] });
                }

                //trace newline
                if (type === "NEWLINE") {
                    currentLine++;
                    currentColumn = 1;
                } else {
                    currentColumn += matches[0].length;
                }

                //update line change
                if (type === "NEWLINE"){
                    currentLine++;
                    currentColumn = 1 ;
                } else {
                    currentColumn += matches[0].length;
                }

                source = source.slice(matches[0].length); //remove match token from source
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