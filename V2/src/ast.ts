export enum NodeType {
    VariableDeclaration = "VariableDeclaration",
    FunctionDeclaration = "FunctionDeclaration",
    Assignment = "Assignment",
    BinaryExpression = "BinaryExpression",
    UnaryExpression = "UnaryExpression",
    Identifier = "Identifier",
    Literal = "Literal",
    BlockStatement = "BlockStatement",
    Program = "Program"
}

export interface statement{
    type: NodeType;
};

export interface Program extends statement{
    kind: "Program";
    body: statement[];
}

export interface Expration extends statement{
    kind: "Expration";
    expression: statement;
}

export interface VariableDeclaration extends statement{
    kind: "VariableDeclaration";
    id: Identifier;
    init: statement;
}

export interface FunctionDeclaration extends statement{
    kind: "FunctionDeclaration";
    id: Identifier;
    params: Identifier[];
    body: statement;
}

export interface Assignment extends statement{
    kind: "Assignment";
    id: Identifier;
    init: statement;
}

export interface BinaryExpression extends statement{
    kind: "BinaryExpression";
    operator: string;
    left: statement;
    right: statement;
}

export interface UnaryExpression extends statement{
    kind: "UnaryExpression";
    operator: string;
    argument: statement;
}

export interface Identifier extends statement{
    kind: "Identifier";
    name: string;
}

export interface Literal extends statement{
    kind: "Literal";
    value: string;
}

export interface BlockStatement extends statement{
    kind: "BlockStatement";
    body: statement[];
}

// Example usage and test code
//export { NodeType, statement, Program, Expration, VariableDeclaration, FunctionDeclaration, Assignment, BinaryExpression, UnaryExpression, Identifier, Literal, BlockStatement };