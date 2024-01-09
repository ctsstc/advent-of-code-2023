import { Day04ScoredCard } from "./day-04-scored-card";

export function day04ScoredCardAmounts(
  scoredCards: Day04ScoredCard[]
): Map<number, bigint> {
  // Initial card amounts all start at 1
  const cardAmounts = new Map(
    scoredCards.map((_scoredCard, idx) => [idx, BigInt(1)])
  );

  for (let i = 0; i < scoredCards.length; i++) {
    const scoreLength = scoredCards[i].score.length;
    const multiplier = cardAmounts.get(i);

    if (multiplier === undefined) throw new Error("Issue getting multiplier");

    for (let scoreIdx = 1; scoreIdx <= scoreLength; scoreIdx++) {
      const cardAmountsOffset = i + scoreIdx;
      const currentCardAmount = cardAmounts.get(cardAmountsOffset);

      if (currentCardAmount !== undefined) {
        cardAmounts.set(cardAmountsOffset, currentCardAmount + multiplier);
      }
    }
  }

  return cardAmounts;
}
