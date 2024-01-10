import { Day05Header, day05ParseHeader } from "./day-05-header";
import { Day05Instruction, day05ParseInstruction } from "./day-05-instruction";

export type Day05InstructionSet = {
  header: Day05Header;
  instructions: Day05Instruction[];
};

export function day05ParseInstructionSets(
  lines: string[]
): Day05InstructionSet[] {
  const instructionLines = structuredClone(lines);
  const instructions: Day05InstructionSet[] = [];

  while (instructionLines.length > 0) {
    const instructionSet = day05ParseInstructionSet(instructionLines);

    instructions.push(instructionSet);

    // Remove instruction count plus header, plus the following empty line.
    instructionLines.splice(0, instructionSet.instructions.length + 2);
  }

  return instructions;
}

function day05ParseInstructionSet(lines: string[]): Day05InstructionSet {
  const instructionLines = structuredClone(lines);
  const header = day05ParseHeader(instructionLines[0]);
  instructionLines.splice(0, 1);
  const instructions: Day05Instruction[] = [];

  for (const line of instructionLines) {
    if (line === "") break;

    const instruction = day05ParseInstruction(line);

    instructions.push(instruction);
  }

  return {
    header,
    instructions,
  };
}
