// tests/executor.test.ts
import { TypeScriptExecutor } from '../src/engine/executor.ts';
import { TypeScriptCompiler } from '../src/engine/compiler.ts';
import { TypeScriptParser } from '../src/engine/parser.ts';

Deno.test("Test TypeScript Executor", () => {
  const tsCode = "let message: string = 'Hello, World!';";
  const parsedAST = TypeScriptParser.parse(tsCode);
  const machineCode = TypeScriptCompiler.compile(parsedAST);

  // Capture console.log output to test
  const consoleOutput: string[] = [];
  const originalLog = console.log;
  console.log = (message: string) => consoleOutput.push(message);

  TypeScriptExecutor.execute(machineCode);

  console.assert(consoleOutput[0] === "Executing: let message: string = 'Hello, World!'", "Executor should run machine code correctly.");
  
  // Restore original console.log
  console.log = originalLog;
});
