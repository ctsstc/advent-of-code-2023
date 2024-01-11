import { getLines } from "../../utilities/files";
import { day05ApplyInstructionSets } from "../utilities/day-05-apply-instruction-sets";
import { day05ParseInstructionSets } from "../utilities/day-05-instruction-sets";
import { day05Seeds } from "../utilities/day-05-seeds";

export async function SolveDay05Part1(filePath: string): Promise<number> {
  const lines = await getLines(filePath);
  const firstLine = lines[0];
  const seeds = day05Seeds(firstLine);

  const instructionLines = lines.slice(2);
  const instructionSets = day05ParseInstructionSets(instructionLines);

  const appliedInstructionSets = day05ApplyInstructionSets(
    seeds,
    instructionSets
  );
  const minimum = Math.min(...appliedInstructionSets);

  return minimum;
}
