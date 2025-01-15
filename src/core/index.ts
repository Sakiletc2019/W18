import { parseCode } from "./parser.ts";
import { compileCode } from "./compiler.ts";
import { executeCode } from "./executor.ts";

export async function executeTypeScript(code: string): Promise<void> {
  console.log("Starting execution pipeline...");

  // Parse the TypeScript code (simulate parsing)
  const parsedCode = parseCode(code);

  // Compile the parsed code (simulate compilation)
  const compiledCode = compileCode(parsedCode);

  // Execute the machine code (dynamic execution)
  await executeCode(code);

  console.log("Execution complete.");
}

// Example usage
const tsCode = `
let message: string = 'Hello, W18!';
console.log(message);
`;

// Execute the TypeScript code
await executeTypeScript(tsCode);
