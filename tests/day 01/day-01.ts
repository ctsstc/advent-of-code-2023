export async function solveDay01(filePath: string): Promise<number> {
  const fileContents = await Bun.file(filePath).text();
  const lines = fileContents.split("\n");

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
