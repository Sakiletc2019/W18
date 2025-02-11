// tokenizer for ts code

export interface Token {
    type: string;
    value: string;
}
// create a token array for store ideentified tokens
export function tokenize(source: string): Token[]{
    const tokens: Token[]=[];
    let currentLine : number = 1; //keep trackof line number
    let currentColumn :number =1; //keep track column number

    // simple ragEx based approach for tokenizing the input string or source code
    const tokenPatterns: [RegExp, string][]=[
        [/^\s+/, "WHITESPACE"],                         // Matches whitespace (space,tab,newline)
        [/^\n/, "NEWLINE"],                             // Matches newline character
        [/^let|const|var/, "KEYWORD"],                  // Matches keywords let, const, var
        [/^string|number|boolean/,"TYPE"],              // Matches type keywords string, number, boolean
        [/^[a-zA-Z_][a-zA-Z0-9_]*/, "IDENTIFIER"],      // Matches Variable names (identifier)
        [/^:/,"COLON"],                                 // Matches colon character (:)
        [/^=/,"ASSIGN"],                                // Matches assignment operator (=)
        [/^"[^"]*"|'[^']*'/,"Literal STRING"],                  // Matches single-quoted (') & double-quoted(") string literals
        [/^\d+(\.\d+)?/,"LITERAL NUMBER"],                      // Matches integer and floating-point number literals
        [/^true|TRUE|false|FALSE/,"LITERAL BOOLEAN"],           // Matches boolean literals true, false, TRUE, FALSE
        [/^;/,"SEMICOLON"],                             // Matches semicolon character (;)
    ];

    //loop the source code untill all the characters are tokenized
    while(source.length>0){
        let tokenFound = false; //flag to check if a token is found
        let matched = false; // define matched variable

        //try to match each token to the token list
        for (let i = 0; i < tokenPatterns.length; i++) {
            const [pattern, type] = tokenPatterns[i];
            const matches = source.match(pattern);
            if (matches) {
                tokenFound = true;  //if token found, set the flag to true                       
                if (type !== "WHITESPACE" && type !== "NEWLINE") {
                    tokens.push({ type, value: matches[0] });
                };

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

        if(!matched || !tokenFound){
            throw new Error("Unexpected character in input: "+source);
        }

    }
    return tokens;
};