import { parseCode } from './parser.ts';
import { compileCode } from './compiler.ts';
import { executeCode } from './executor.ts';

export function executeTypeScript(code: string): void {
  console.log("Starting execution pipeline...");
  const ast = parseCode(code);
  const machineCode = compileCode(ast);
  executeCode(machineCode);
  console.log("Execution complete.");
}

// Test execution
const tsCode = `
let message: string = 'Hello, W18!';
console.log(message);
`;

executeTypeScript(tsCode);
