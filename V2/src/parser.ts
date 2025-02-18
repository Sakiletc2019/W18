import { NodeType, Program } from "./ast.ts";
import { tokenize, TokenType, DataType, KeywordType } from "./lexer.ts";

enum LocalTokenType {
    EOF,
    VariableDeclaration,
    Identifier,
    IDENTIFIER,
    Assignment,
    // Other token types...
}

// Example node classes
class StatementNode {
    constructor(public type: NodeType) {}
}

class VariableDeclarationNode extends StatementNode {
    constructor(public identifier: string, public expression: ExpressionNode) {
        super(NodeType.VariableDeclaration);
            // Removed incorrect return statement
    }
}
class ExpressionNode {
    constructor(public value: string | number | boolean) {}
}
class ParserToken {
    constructor(public type: LocalTokenType, public value: string | number | boolean) {}
}

export default class Parser {
    private tokens: ParserToken[] = [];

    parseStatement(): StatementNode {
        // Implementation of parseStatement
        // This is just an example, adjust it according to your needs
        const token = this.nextToken();
        switch (token.type) {
            case LocalTokenType.IDENTIFIER:
                return this.parseVariableDeclaration();
            // Handle other statement types...
            default:
                console.log(`Unexpected token: ${token.type}`);
                return new StatementNode(NodeType.Program); // Return a default StatementNode
        }
    }
    //eof is a private method that checks if the current token is not an end of file token
    private not_eof(): boolean{
        return this.tokens[0].type != LocalTokenType.EOF;
    }

    // Example method for parsing expressions
    parseExpression(): ExpressionNode {
        // Implementation of parseExpression
        // This is just an example, adjust it according to your needs
        const token = this.nextToken();
        // Parse the expression based on the token type
        // ...
        return new ExpressionNode(token.value);
    }

    // Example method for getting the next token
    nextToken(): ParserToken {
        // Implementation of nextToken
        // This is just an example, adjust it according to your needs
        // ...
        return new ParserToken(LocalTokenType.EOF, ""); // Placeholder
    }

    // Example method for parsing variable declarations
    parseVariableDeclaration(): VariableDeclarationNode {
        // Implementation of parseVariableDeclaration
        // This is just an example, adjust it according to your needs
        let token = this.nextToken();
        if (token.type !== LocalTokenType.Identifier) {
            throw new Error(`Expected identifier, got ${token.type}`);
        }
        const identifier = token.value as string;
        token = this.nextToken();
        if (token.type !== LocalTokenType.Assignment) {
            throw new Error(`Expected assignment, got ${token.type}`);
        }
        const expression = this.parseExpression();
        return new VariableDeclarationNode(identifier, expression);
    }

    private convertTokenType(type: TokenType | KeywordType | DataType): LocalTokenType {
        switch (type) {
            case TokenType.IDENTIFIER:
                return LocalTokenType.Identifier;
            // Add other cases as needed...
            default:
                throw new Error(`Unexpected token type: ${type}`);
        }
    }

    public produceAST(sourceCode: string): Program {
        this.tokens = tokenize(sourceCode).map(token => new ParserToken(this.convertTokenType(token.type), token.value));
        const program: Program = {
            kind: "Program",
            body: [],
            type: NodeType.Program
        };

        //Parse until end of file
        while (this.not_eof()) {
            program.body.push(this.parseStatement());
        }

        return program;
    }
}


// Example usage
if (import.meta.main) {
    const parser = new Parser();
    const sourceCode = await Deno.readTextFile("code.txt");
    const ast = parser.produceAST(sourceCode);
    console.log(ast);
}