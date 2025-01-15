import { parseCode } from "./parser.ts";
import { compileCode } from "./compiler.ts";
import { executeCode } from "./executor.ts";

export function executeTypeScript(code: string): void {
  console.log("Starting execution pipeline...");
  const parsedCode = parseCode(code);
  const compiledCode = compileCode(parsedCode);
  executeCode(compiledCode);
  console.log("Execution complete.");
}

// Example usage
const tsCode = `
let message: string = 'Hello, W18!';
console.log(message);
`;

executeTypeScript(tsCode);
