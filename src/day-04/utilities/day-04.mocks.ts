import { getLines } from "../../utilities/files";
import { day04ParseCard } from "./day-04-card";
import { day04ScoredCardsFromCards } from "./day-04-scored-card";

export const mockDay04CardsExample = import.meta.resolveSync(
  "../day-04-example.txt"
);
export const mockDay04CardsLines = await getLines(mockDay04CardsExample);
export const mockDay04Cards = mockDay04CardsLines.map((cardLine) =>
  day04ParseCard(cardLine)
);
export const mockDay04ScoredCards = day04ScoredCardsFromCards(mockDay04Cards);
