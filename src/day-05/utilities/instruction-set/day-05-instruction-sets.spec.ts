import { describe, expect, it } from "bun:test";
import { day05ParseInstructionSets } from "./day-05-instruction-sets";

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
    expect(parsed).toEqual([
      {
        header: {
          from: "seed",
          to: "soil",
        },
        instructions: [
          {
            destination: 50,
            source: 98,
            range: 2,
          },
          {
            destination: 52,
            source: 50,
            range: 48,
          },
        ],
      },
      {
        header: {
          from: "soil",
          to: "fertilizer",
        },
        instructions: [
          {
            destination: 0,
            source: 15,
            range: 37,
          },
          {
            destination: 37,
            source: 52,
            range: 2,
          },
          {
            destination: 39,
            source: 0,
            range: 15,
          },
        ],
      },
    ]);
  });
});
