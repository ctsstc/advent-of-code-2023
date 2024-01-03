export type Day04Card = {
  winningNumbers: number[];
  myNumbers: number[];
};

export function day04ParseCard(line: string): Day04Card {
  const cardSplitString = /\:\s+/;
  const cardNumbersSplitString = /\s+\|\s+/;

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

export function day04ScoreCard(card: Day04Card): number {
  const unionLength = cardUnion(card).length;

  return Math.pow(2, unionLength - 1);
}

function cardUnion(card: Day04Card): number[] {
  return card.winningNumbers.filter((winningNumber) =>
    card.myNumbers.includes(winningNumber)
  );
}
