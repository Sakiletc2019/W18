import { TypeScriptParser } from './engine/parser.ts';
import { TypeScriptCompiler } from './engine/compiler.ts';
import { TypeScriptExecutor } from './engine/executor.ts';

export const executeTypeScript = (tsCode: string) => {
  const parsedAST = TypeScriptParser.parse(tsCode);
  const machineCode = TypeScriptCompiler.compile(parsedAST);
  TypeScriptExecutor.execute(machineCode);
};

// Sample TypeScript Code
const tsCode = "let message: string = 'Hello, World!';";
executeTypeScript(tsCode);
