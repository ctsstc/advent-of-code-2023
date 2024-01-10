import { describe, expect, it } from "bun:test";
import { day05ApplyInstructionSets } from "./day-05-apply-instruction-sets";
import { mockDay05InstructionSets } from "./day-05-instruction-sets.mocks";

describe("Day 05 > Apply Instruction Sets", () => {
  const seeds = [79, 14, 55, 13];

  describe("first instructions", () => {
    const firstInstructions = mockDay05InstructionSets[0];

    const firstAppliedInstructions = day05ApplyInstructionSets(seeds, [
      firstInstructions,
    ]);

    it("applies the first instructions", () => {
      expect(firstAppliedInstructions).toEqual([81, 14, 57, 13]);
    });
  });

  describe("more instructions", () => {
    const appliedInstructions = day05ApplyInstructionSets(
      seeds,
      mockDay05InstructionSets
    );

    it("applies all the instructions", () => {
      expect(appliedInstructions).toEqual([81, 53, 57, 52]);
    });
  });
});
