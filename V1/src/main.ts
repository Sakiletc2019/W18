//Main entry point that orchestrates the engine

import { parse } from "./parser/parser.ts";
import { generateBytecode } from "./bytecode/bytecode.ts";
import { emitBytecode } from "./bytecode/emitter.ts";
import { compileToAssembly } from "./jit/jit.ts";
import { executeAssembly } from "./runtime/vm.ts";

// Example TypeScript source code
const sourceCode = `let AST: string = "is tree";`;

// 1. Parse TypeScript to AST
const ast = parse(sourceCode);

// 2. Generate bytecode from AST
const bytecode = generateBytecode(ast);
console.log("Bytecode:");
console.log(emitBytecode(bytecode));

// 3. Compile bytecode to x86_64 assembly
const assemblyCode = compileToAssembly(bytecode);
console.log("\nGenerated Assembly:");
console.log(assemblyCode);

// 4. Execute the assembly (via JIT execution stub)
executeAssembly(assemblyCode);
