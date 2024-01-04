type Day03Coordinate = {
  x: number;
  y: number;
};

export type Day03Number = Day03Coordinate & {
  value: number;
  length: number;
};

export type Day03Symbol = Day03Coordinate;

type Day03Collection = {
  numbers: Day03Number[];
  symbols: Day03Symbol[];
};

export function day03ParseLine(line: string, row: number): Day03Collection {
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

export function day03ParseLines(lines: string[]): Day03Collection {
  return lines.reduce(
    (collection, line, column) => {
      const { numbers, symbols } = day03ParseLine(line, column);

      collection.numbers.push(...numbers);
      collection.symbols.push(...symbols);

      return collection;
    },
    {
      numbers: [] as Day03Number[],
      symbols: [] as Day03Symbol[],
    }
  );
}

export function day03ValidNumbers(collection: Day03Collection): Day03Number[] {
  return collection.numbers.filter((number) => {
    return collection.symbols.some((symbol) => {
      // determine if the symbol is within the range of the number
      // a range is the start position and the end
      // a symbol must be either on the same line or within 1 line
      //  then the x must be within the number x - 1, through number x + length + 1

      const xStartRange = number.x - 1;
      const xEndRange = number.x + number.length + 1;
      const yStartRange = number.y - 1;
      const yEndRange = number.y + 1;

      const withinXRange = symbol.x >= xStartRange && symbol.x <= xEndRange;
      const withinYRange = symbol.y >= yStartRange && symbol.y <= yEndRange;

      return withinXRange && withinYRange;
    });
  });
}
