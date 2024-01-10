import { Day05InstructionSet } from "./day-05-instruction-sets";

export function day05ApplyInstructionSets(
  seeds: number[],
  instructionSets: Day05InstructionSet[]
): number[] {
  return seeds.map((seed) => {
    for (const { instructions } of instructionSets) {
      for (const instruction of instructions) {
        const lowerBound = instruction.source;
        const upperBound = instruction.source + instruction.range;
        const inBounds = seed >= lowerBound && seed <= upperBound;
        const difference = seed - lowerBound;

        if (inBounds) {
          seed = instruction.destination + difference;

          // stop going through instructions in this set and move onto the next set
          break;
        }
      }
    }

    return seed;
  });
}
