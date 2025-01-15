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
      // Example TypeScript code
      let sum:number = 0;
      for (let i:number = 0; i < 100; i++) {
        sum += i;
      }
      console.log("Sum from 0 to 99:", sum);
    `;

// Execute the TypeScript code
await executeTypeScript(tsCode);
