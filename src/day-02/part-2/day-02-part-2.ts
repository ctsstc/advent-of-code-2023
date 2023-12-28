import { getLines } from "../../utilities/files";

export async function SolveDay02Part2(filePath: string): Promise<number> {
  const lines = await getLines(filePath);

  return lines.reduce((sum, line) => {
    const [_prefix, game] = line.split(": ");
    const subsets = game.split("; ");

    const minimumSubset = subsets.reduce(
      ({ red, green, blue }, subsets) => {
        const [_foundRed, redCount] = /(\d+) red/.exec(subsets) ?? [0, 0];
        const [_foundGreen, greenCount] = /(\d+) green/.exec(subsets) ?? [0, 0];
        const [_foundBlue, blueCount] = /(\d+) blue/.exec(subsets) ?? [0, 0];

        return {
          red: Math.max(Number(redCount), red),
          green: Math.max(Number(greenCount), green),
          blue: Math.max(Number(blueCount), blue),
        };
      },
      { red: 0, green: 0, blue: 0 }
    );

    const power = minimumSubset.red * minimumSubset.green * minimumSubset.blue;

    return sum + power;
  }, 0);
}
