import { getLines } from "../utilities/files";
import { day03ValidGearsWithNumbers } from "./day-03-gear";
import { day03ParseLines } from "./day-03-utilities";

export async function SolveDay03Part2(filePath: string): Promise<number> {
  const lines = await getLines(filePath);
  const collection = day03ParseLines(lines);
  const validGears = day03ValidGearsWithNumbers(collection);

  return validGears.reduce((sum, validGear) => sum + validGear.gearRatio, 0);
}
