export async function getLines(filePath: string): Promise<string[]> {
  const fileContents = await Bun.file(filePath).text();
  const lines = fileContents.split("\n");

  return lines;
}

export function getGrid(lines: string[]): string[][] {
  return lines.map((line) => line.split(""));
}
