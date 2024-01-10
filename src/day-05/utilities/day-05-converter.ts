export type Day05Converter = {
  source: number;
  destination: number;
  range: number;
};

export function day05ParseConverter(parserString: string): Day05Converter {
  const [destinationString, sourceString, rangeString] =
    parserString.split(" ");

  return {
    source: parseInt(sourceString),
    destination: parseInt(destinationString),
    range: parseInt(rangeString),
  };
}
