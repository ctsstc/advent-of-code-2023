import { Day04Card, Day04CardScore, day04ScoreCard } from "./day-04-card";

export type Day04ScoredCard = Day04Card & {
  score: Day04CardScore;
};

export function day04ScoredCardsFromCards(
  cards: Day04Card[]
): Day04ScoredCard[] {
  return cards.map((card) => {
    return {
      ...card,
      score: { ...day04ScoreCard(card) },
    };
  });
}
