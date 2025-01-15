import * as ts from "https://deno.land/x/typescript@v4.9.5/mod.ts";

export function parseCode(code: string): ts.SourceFile {
  console.log("Parsing TypeScript code...");
  return ts.createSourceFile("temp.ts", code, ts.ScriptTarget.Latest);
}
