//Main Entry Point for W18 Execution Engine
// src/index.ts
import { TypeScriptParser } from './engine/parser.ts';
import { TypeScriptCompiler } from './engine/compiler.ts';
import { Executor } from './engine/executor.ts';

export class W18 {
  static execute(tsCode: string): void {
    // Step 1: Parse the TypeScript code
    const parsedCode = TypeScriptParser.parse(tsCode);

    // Step 2: Compile the parsed code into machine code
    const machineCode = TypeScriptCompiler.compileToMachineCode(parsedCode);

    // Step 3: Execute the machine code
    Executor.execute(machineCode);
  }
}
