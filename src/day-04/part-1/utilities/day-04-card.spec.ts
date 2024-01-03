import { describe, expect, it } from "bun:test";
import { day04ParseCard } from "./day-04-card";

describe("Day 04 Part 1 > Utility - Card", () => {
  const cardExample = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53";

  it("returns the card", () => {
    expect(day04ParseCard(cardExample)).toEqual({
      winningNumbers: [41, 48, 83, 86, 17],
      myNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
    });
  });
});
