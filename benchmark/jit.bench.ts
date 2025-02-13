import { compileToAssembly } from "../src/jit/jit.ts";
import { generateBytecode } from "../src/bytecode/bytecode.ts";
import { parse } from "../src/parser/parser.ts";

const sourceCode = `let AST: string = "is tree";`;

Deno.bench("JIT compilation benchmark", () => {
  const ast = parse(sourceCode);
  const bytecode = generateBytecode(ast);
  compileToAssembly(bytecode);
});
