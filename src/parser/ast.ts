// AST node type definations

export type ASTNode = VariableDeclarationNode ;
export interface VariableDeclarationNode {
    type: "VariableDeclaration";
    kind: "let" | "const" | "var";
    id: string;
    datatype: "string" | "number" | "boolean" ;
    value: string | number | boolean;
}
