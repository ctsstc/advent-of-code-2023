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
  });

  describe("#day04ScoreCard", () => {
    it("scores the card", () => {
      expect(day04ScoreCard(card)).toEqual(8);
    });
  });
});
