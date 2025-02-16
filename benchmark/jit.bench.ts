import { compileToAssembly } from "../V1/src/jit/jit.ts";
import { generateBytecode } from "../V1/src/bytecode/bytecode.ts";
import { parse } from "../V1/src/parser/parser.ts";

const sourceCode = `let AST: string = "is tree";`;

Deno.bench("JIT compilation benchmark", () => {
  const ast = parse(sourceCode);
  const bytecode = generateBytecode(ast);
  compileToAssembly(bytecode);
});
