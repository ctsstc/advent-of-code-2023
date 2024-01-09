import { describe, expect, it } from "bun:test";
import { day04ScoredCardAmounts } from "./day-04-scored-card-amounts";
import { mockDay04ScoredCards } from "./day-04.mocks";

describe("Day 04 > Scored Card Amounts", async () => {
  const scoredCardAmounts = day04ScoredCardAmounts(mockDay04ScoredCards);

  it("returns the scored card amounts", () => {
    expect(scoredCardAmounts).toEqual(
      new Map([
        [0, BigInt(1)],
        [1, BigInt(2)],
        [2, BigInt(4)],
        [3, BigInt(8)],
        [4, BigInt(14)],
        [5, BigInt(1)],
      ])
    );
  });
});
