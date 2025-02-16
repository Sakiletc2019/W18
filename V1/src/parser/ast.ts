// AST node type definations

export type ASTNode = VariableDecarationNode ;
export interface VariableDecarationNode {
    type: "VariableDeclaration";
    kind: "let" | "const" | "var";
    id: string;
    datatype: "string" | "number" | "boolean" ;
    value ?: string | number | boolean;
}
