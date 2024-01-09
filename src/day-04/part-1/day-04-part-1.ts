import { getLines } from "../../utilities/files";
import { day04ParseCard, day04ScoreCard } from "../utilities/day-04-card";

export async function SolveDay04Part1(filePath: string): Promise<number> {
  const lines = await getLines(filePath);
  const cards = lines.map((line) => day04ParseCard(line));
  const cardsScore = cards.map((card) => day04ScoreCard(card));
  const totalScore = cardsScore.reduce(
    (sum, cardScore) => sum + cardScore.amount,
    0
  );

  return totalScore;
}
