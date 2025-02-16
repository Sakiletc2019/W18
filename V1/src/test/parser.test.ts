import { parse } from "../parser/parser.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("Parser should correctly parse variable declarations", () => {
    const source = `let x: number = 42;`;
    const ast = parse(source);
  
    // If `parse` returns an array, access the first element
    assertEquals(ast[0], {
      type: "VariableDeclaration",
      kind: "let",
      id: "x",
      datatype: "number",
      value: 42,
    });
  });