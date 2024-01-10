export function day05Seeds(firstLine: string): number[] {
  const [_prefix, seedsString] = firstLine.split("seeds: ");
  const seedsStrings = seedsString.split(" ");

  return seedsStrings.map((seedsString) => parseInt(seedsString));
}
