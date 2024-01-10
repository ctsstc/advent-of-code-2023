import { Day05InstructionSet } from "./day-05-instruction-sets";

export const mockDay05InstructionSets: Day05InstructionSet[] = [
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
];
