// tests/compiler.test.ts
import { TypeScriptCompiler } from '../src/engine/compiler.ts';
import { TypeScriptParser } from '../src/engine/parser.ts';

Deno.test("Test TypeScript Compiler", () => {
  const tsCode = "let message: string = 'Hello, World!';";
  const parsedAST = TypeScriptParser.parse(tsCode);
  const machineCode = TypeScriptCompiler.compile(parsedAST);
  console.assert(machineCode.length === 1, "Compiler should generate 1 line of machine code.");
});
