export function parseCode(code: string): string {
    console.log("Parsing TypeScript code...");
    // This example still simulates parsing; can be expanded for AST analysis
    return `Parsed code: ${code}`;
  }

  //stand alone
  if (import.meta.main){
    console.log(parseCode("hello"));
  }
  