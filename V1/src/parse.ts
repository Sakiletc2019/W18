import { parse } from "./parser/parser.ts";

async function main() {
    if (Deno.args.length === 0) {
        console.error("Usage: deno run -A parse.ts code.ts");
        Deno.exit(1);
    }

    const filePath = Deno.args[0]; // Get file path from command line argument
    const source = await Deno.readTextFile(filePath); // Read the file contents

    try {
        const ast = parse(source);
        console.log(JSON.stringify(ast, null, 2)); // Print AST in readable JSON format
    } catch (error) {
        if (error instanceof Error) {
            console.error("Parsing error:", error.message);
        } else {
            console.error("Parsing error:", error);
        }
    }
}

main();
