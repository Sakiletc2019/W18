//vartual machine
<<<<<<< HEAD
import { compileToAssembly as _compileToAssembly } from "../jit/jit.ts";
=======
<<<<<<< HEAD
import { compileToAssembly as _compileToAssembly } from "../jit/jit.ts";
=======
import { compileToAssembly } from "../jit/jit.ts";
>>>>>>> modular
>>>>>>> b9059189a07c0577ffc9c0d6a11023f3bc53e705

// the stub simualtion the JIT execution flow
// might allocate executable memory and load machine code

export function executeAssembly(assemblyCode: string): void {
    console.log("Executing assembly code:\n", assemblyCode);

    // Integration with WASM or DENO FFI
<<<<<<< HEAD
    }
=======
    };
>>>>>>> modular
