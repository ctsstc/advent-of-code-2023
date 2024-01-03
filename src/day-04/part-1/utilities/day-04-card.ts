export type Day04Card = {
  winningNumbers: number[];
  myNumbers: number[];
};

export function day04ParseCard(line: string): Day04Card {
  const cardSplitString = ": ";
  const cardNumbersSplitString = " | ";

  const [_cardId, numbers] = line.split(cardSplitString);
  const [winningNumbersString, myNumbersString] = numbers.split(
    cardNumbersSplitString
  );

  const winningNumbers = numbersStringToNumbers(winningNumbersString);
  const myNumbers = numbersStringToNumbers(myNumbersString);

  return {
    winningNumbers,
    myNumbers,
  };
}

function numbersStringToNumbers(numbersString: string): number[] {
  const numbersSplitString = /\s+/g;

  return numbersString
    .split(numbersSplitString)
    .map((numberString) => parseInt(numberString));
}
