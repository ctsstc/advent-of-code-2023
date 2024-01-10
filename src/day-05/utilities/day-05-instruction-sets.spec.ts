import { describe, expect, it } from "bun:test";
import { day05ParseInstructionSets } from "./day-05-instruction-sets";
import { mockDay05InstructionSets } from "./day-05-instruction-sets.mocks";

describe("Day 05 > Instruction Sets", () => {
  const instructionLines = [
    "seed-to-soil map:",
    "50 98 2",
    "52 50 48",
    "",
    "soil-to-fertilizer map:",
    "0 15 37",
    "37 52 2",
    "39 0 15",
  ];
  const parsed = day05ParseInstructionSets(instructionLines);

  it("parses the instruction sets", () => {
    expect(parsed).toEqual(mockDay05InstructionSets);
  });
});
