import { describe, expect, it } from "bun:test";
import { getLines } from "../../utilities/files";
import { day04ParseCard } from "./day-04-card";
import { day04ScoredCardsFromCards } from "./day-04-scored-card";

describe("ScoredCard", async () => {
  const cardsExample = import.meta.resolveSync("../day-04-example.txt");
  const cardsLines = await getLines(cardsExample);
  const cards = cardsLines.map((cardLine) => day04ParseCard(cardLine));
  const scoredCards = day04ScoredCardsFromCards(cards);

  it("returns the Scored Cards", () => {
    const scores = scoredCards.map((scoredCard) => scoredCard.score);

    expect(scores).toEqual([8, 2, 2, 1, 0, 0]);
  });
});
