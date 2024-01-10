export type Day05Instruction = {
  source: number;
  destination: number;
  range: number;
};

export function day05ParseInstruction(parserString: string): Day05Instruction {
  const [destinationString, sourceString, rangeString] =
    parserString.split(" ");

  return {
    source: parseInt(sourceString),
    destination: parseInt(destinationString),
    range: parseInt(rangeString),
  };
}
