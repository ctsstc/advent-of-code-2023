export function day05Seeds(firstLine: string): number[] {
  const [_prefix, seedsString] = firstLine.split("seeds: ");
  const seedsStrings = seedsString.split(" ");

  return seedsStrings.map((seedsString) => parseInt(seedsString));
}

export function day05SeedsPart2(firstLine: string): number[] {
  const part1Seeds = day05Seeds(firstLine);
  const seeds: number[] = [];

  for (let i = 0; i < part1Seeds.length; i += 2) {
    const [start, range] = part1Seeds.slice(i, i + 2);

    for (let ii = 0; ii < range; ii++) {
      seeds.push(start + ii);
    }
  }

  return seeds;
}

function day05SeedStrings(firstLine: string): number[] {
  const seedsStrings = day05SeedStrings(firstLine);

  return seedsStrings;
}
