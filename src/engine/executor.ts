// src/engine/executor.ts
export class TypeScriptExecutor {
    static execute(machineCode: string[]) {
      // Log each line of machine code to simulate execution
      machineCode.forEach(code => {
        console.log(`Executing: ${code}`); // Add 'Executing: ' to match the expected output in the test
      });
    }
  }
  