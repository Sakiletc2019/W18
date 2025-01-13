// tests/engine.test.ts
import { executeTypeScript } from '../src/index.ts';

Deno.test("Test TypeScript Engine", () => {
  const tsCode = "let message: string = 'Hello, World!';";
  
  // Capture the console output
  const consoleOutput: string[] = [];
  const originalLog = console.log;
  console.log = (message: string) => consoleOutput.push(message);

  // Execute the TypeScript code
  executeTypeScript(tsCode);

  // Verify the console output
  console.assert(consoleOutput[0] === "Executing: let message: string = 'Hello, World!'", 
    `Expected "Executing: let message: string = 'Hello, World!'", but got ${consoleOutput[0]}`);

  // Restore original console.log
  console.log = originalLog;
});
