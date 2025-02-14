// Emts bytecode instruction
import { Instruction } from "./bytecode.ts";

export function emitBytecode(instructions: Instruction[]): string {
  return instructions.map((instruction) => {
    if (instruction.args) {
      return `${instruction.op} ${instruction.args}`;
    }
    return instruction.op;
  }).join("\n");
}