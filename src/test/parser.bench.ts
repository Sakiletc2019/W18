import { parse } from "../parser/parser.ts";

// /C:/Users/sakil/OneDrive/Desktop/my/W18 ( TypeScript Execution Engine )/W18/src/test/parser.test.ts

const source = `
let x: string = 'hello';
const PI: number = 3.14;
`;
Deno.bench("parse benchmark", () => {
    parse(source);
});