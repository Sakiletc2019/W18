// AST to bytecode conversion logic.
import { ASTNode as _ASTNode, VariableDecarationNode as _VariableDecarationNode } from "../parser/ast.ts";

// Define the bytecode instruction type
export type Instruction = { op: string; args?: string | number | boolean };

export type Bytecode = Instruction[];

export function generateBytecode(_nodes: _VariableDecarationNode[]): Bytecode {
    const instructions: Instruction[] = [];

    for (const node of _nodes) {
        if (node.type === "VariableDeclaration") {
            // Push value then store in variable
            instructions.push({ op: "LOAD_CONST", args: node.value });
            instructions.push({ op: "STORE_VAR", args: node.id });
        }
    }
    return instructions;
}
