import { getLines } from "../../utilities/files";

export interface Day02Part01Config {
  maxRed: number;
  maxGreen: number;
  maxBlue: number;
}

export async function SolveDay02Part1(
  filePath: string,
  { maxRed, maxGreen, maxBlue }: Day02Part01Config
): Promise<number> {
  const lines = await getLines(filePath);

  return lines.reduce((sum, line, idx) => {
    const [_prefix, game] = line.split(": ");
    const subsets = game.split("; ");

    const allSubsetsValid = subsets.every((subsets) => {
      const [_foundRed, redCount] = /(\d+) red/.exec(subsets) ?? [0, 0];
      const [_foundGreen, greenCount] = /(\d+) green/.exec(subsets) ?? [0, 0];
      const [_foundBlue, blueCount] = /(\d+) blue/.exec(subsets) ?? [0, 0];

      return (
        Number(redCount) <= maxRed &&
        Number(greenCount) <= maxGreen &&
        Number(blueCount) <= maxBlue
      );
    });

    if (allSubsetsValid) {
      sum += idx + 1;
    }

    return sum;
  }, 0);
}
