<<<<<<< HEAD
import { parse } from "../src/parser/parser.ts";
=======
import { parse } from "../parser/parser.ts";
>>>>>>> modular

// /C:/Users/sakil/OneDrive/Desktop/my/W18 ( TypeScript Execution Engine )/W18/src/test/parser.test.ts

const source = `
let x: string = 'hello';
const PI: number = 3.14;
`;

Deno.bench("parse benchmark", () => {
    parse(source);
});

/*
Benchmark Results:

CPU | 11th Gen Intel(R) Core(TM) i3-1115G4 @ 3.00GHz    
Runtime | Deno 2.1.5 (x86_64-pc-windows-msvc)

benchmark         time/iter (avg)        iter/s      (min … max)           p75      p99     p995
----------------- ----------------------------- --------------------- --------------------------
<<<<<<< HEAD
parse benchmark            8.0 µs       113,000 (  5.6 µs … 970.3 µs)   7.6 µs  24.5 µs 107.9 µs
=======
parse benchmark            8.8 µs       113,000 (  5.6 µs … 970.3 µs)   7.6 µs  24.5 µs 107.9 µs
>>>>>>> modular
*/