async function getLines(filePath: string): Promise<string[]> {
  const fileContents = await Bun.file(filePath).text();
  const lines = fileContents.split("\n");

  return lines;
}

function getSumOfLines(lines: string[]): number {
  const numbers = lines.reduce((numberCollection, line) => {
    const foundNumbers = line.match(/\d/g);

    if (!foundNumbers) return numberCollection;

    const firstNumberString = foundNumbers.at(0);
    const lastNumberString = foundNumbers.at(-1);
    const joined = [firstNumberString, lastNumberString].join("");
    const integer = parseInt(joined);

    numberCollection.push(integer);

    return numberCollection;
  }, [] as number[]);

  const sum = numbers.reduce((sum, number) => sum + number, 0);

  return sum;
}

export async function solveDay01(filePath: string): Promise<number> {
  const lines = await getLines(filePath);

  return getSumOfLines(lines);
}

export async function solveDay01Part2(filePath: string): Promise<number> {
  const lines = await getLines(filePath);

  const lookup = new Map<string, number>([
    // Overlaps - manual for now, but could utilize an overlap algorithm to dynamically do this
    // Just look at the last character for a single pass
    // This will implicitly allow us to not have to also check the first character since we'd be checking the last against the first
    // Pro Tip: use VS Code's selection highlighting to validate/find ;)
    // PS: these should come before the standard transformations so that there's no competition
    // Other Thoughts: it would be safest to look at the original lines,
    //  but I believe due to a proof that we do not need to do that and can edit in-place

    // 1
    ["oneight", 18],
    // 2
    ["twone", 21],
    // 3
    ["threeight", 38],
    // 5
    ["fiveight", 58],
    // 7
    ["sevenine", 79],
    // 8
    ["eightwo", 82],
    ["eighthree", 83],
    // 9
    ["nineight", 98],

    // Standard
    ["one", 1], // Start: twone End: oneight
    ["two", 2], // Start: eightwo End: twone
    ["three", 3], //
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ]);

  // for each key in lookup find and replace in the current line with the associated number
  // then we can run the solving that we utilized on day 1

  const numberLines = lines.map((line) => {
    const entries = lookup.entries();

    for (const [word, number] of entries) {
      line = line.replaceAll(word, number.toString());
    }

    return line;
  });

  return getSumOfLines(numberLines);
}
