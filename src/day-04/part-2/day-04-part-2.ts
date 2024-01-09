import { getLines } from "../../utilities/files";
import { day04ParseCard } from "../utilities/day-04-card";
import { day04ScoredCardsFromCards } from "../utilities/day-04-scored-card";
import { day04ScoredCardAmounts } from "../utilities/day-04-scored-card-amounts";

export async function SolveDay04Part2(filePath: string): Promise<BigInt> {
  const lines = await getLines(filePath);
  const cards = lines.map((line) => day04ParseCard(line));
  const scoredCards = day04ScoredCardsFromCards(cards);
  const cardAmounts = day04ScoredCardAmounts(scoredCards);

  return [...cardAmounts.values()].reduce(
    (sum, current) => sum + current,
    BigInt(0)
  );
}
