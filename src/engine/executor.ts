export class TypeScriptExecutor {
    static execute(machineCode: string[]) {
      machineCode.forEach(code => {
        console.log(code); // Simulate machine code execution by printing to the console
      });
    }
  }