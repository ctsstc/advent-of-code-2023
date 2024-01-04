type Day03Coordinate = {
  x: number;
  y: number;
};

export type Day03Number = Day03Coordinate & {
  value: number;
  length: number;
};

export type Day03Symbol = Day03Coordinate;

export function day03ParseLine(
  line: string,
  row: number
): {
  numbers: Day03Number[];
  symbols: Day03Symbol[];
} {
  const matcher = /\d+|[^.\d]/g;
  const matches = [...line.matchAll(matcher)];

  return matches.reduce(
    (collection, match) => {
      const valueString = match[0];
      const value = parseInt(valueString);
      const isSymbol = isNaN(value);

      if (match.index === undefined) throw new Error("Match missing index?!");

      const coordinate: Day03Coordinate = {
        x: match.index,
        y: row,
      };

      if (isSymbol) {
        collection.symbols.push({
          ...coordinate,
        });
      } else {
        collection.numbers.push({
          ...coordinate,
          value,
          length: valueString.length,
        });
      }

      return collection;
    },
    {
      numbers: [] as Day03Number[],
      symbols: [] as Day03Symbol[],
    }
  );
}
