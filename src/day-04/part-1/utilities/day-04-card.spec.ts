import { describe, expect, it } from "bun:test";
import { day04ParseCard, day04ScoreCard } from "./day-04-card";

describe("Day 04 Part 1 > Utility - Card", () => {
  const cardExample = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53";
  const card = day04ParseCard(cardExample);

  describe("#day04ParseCard", () => {
    it("returns the card", () => {
      expect(card).toEqual({
        winningNumbers: [41, 48, 83, 86, 17],
        myNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
      });
    });

    describe("edge case card with extra spaces around split characters", () => {
      const edgeCaseCardExample =
        "Card 1:  1 48 83 86  7 |  3 86  6 31  1  9 48 53";
      const edgeCaseCard = day04ParseCard(edgeCaseCardExample);

      it("parses the card correctly", () => {
        expect(edgeCaseCard).toEqual({
          winningNumbers: [1, 48, 83, 86, 7],
          myNumbers: [3, 86, 6, 31, 1, 9, 48, 53],
        });
      });
    });
  });

  describe("#day04ScoreCard", () => {
    it("scores the card", () => {
      expect(day04ScoreCard(card)).toEqual(8);
    });
  });
});
