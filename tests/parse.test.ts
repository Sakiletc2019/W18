// tests/parser.test.ts
import { TypeScriptParser } from '../src/engine/parser.ts';

Deno.test("Test TypeScript Parser", () => {
  const tsCode = "let message: string = 'Hello, World!';";
  const parsedCode = TypeScriptParser.parse(tsCode);
  console.assert(parsedCode === tsCode, "Parser output should match input code.");
});
