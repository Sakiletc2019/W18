// tokenizer for ts code

export interface Token {
    type: string;
    value: string;
}

export function tokenizer(source: string): Token[]{
    const tokens: Token[]=[];

    // simple ragEx based approach
    const tokenPatterns: [RegExp, string[]]=[
        [/^\s+/, "WHITESPACE"],

}