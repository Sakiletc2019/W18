// JIT bytecode to X86_64 assembly / machine code
import { Instruction } from "../bytecode/bytecode.ts";

// A stub funcion for JIT compilation: translate bytecode to x86_64 assembly
export function compileToAssembly(instructions: Instruction[]): string {
  let asm= "section .text\n   global _start\n\n_start:\n";
  instructions.forEach(instr => {
    switch (instr.op) {
        case "LOAD_CONST":
            asm += `   mov rax, ${instr.args}\n`;
            break;
        case "STORE_VAR":
            //assume a label for the variable to be defined in .data section
            asm += `   mov [${instr.args}], rax\n`;
            break;
        default:
            asm += `   ; Unhandled op: ${instr.op}\n`;
        }
  });
  asm += "   mov rax, 60\n   xor rdi, rdi\n   syscall\n";
  return asm;
}