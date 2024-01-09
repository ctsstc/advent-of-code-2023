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

export type Day04CardScore = {
  amount: number;
  length: number;
};

export function day04ScoreCard(card: Day04Card): Day04CardScore {
  const unionLength = cardUnion(card).length;

  if (unionLength === 0)
    return {
      amount: 0,
      length: 0,
    };

  const amount = Math.pow(2, unionLength - 1);

  return {
    amount,
    length: unionLength,
  };
}

function cardUnion(card: Day04Card): number[] {
  return card.winningNumbers.filter((winningNumber) =>
    card.myNumbers.includes(winningNumber)
  );
}
