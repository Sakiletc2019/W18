// tests/parser.test.ts
import { TypeScriptParser } from '../src/engine/parser.ts';

Deno.test("Test TypeScript Parser", () => {
  const tsCode = "let message: string = 'Hello, World!';";
  const parsedAST = TypeScriptParser.parse(tsCode);
  console.assert(parsedAST.body.length === 1, "Parser should generate 1 statement.");
});
