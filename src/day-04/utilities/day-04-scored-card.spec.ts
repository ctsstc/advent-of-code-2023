import { describe, expect, it } from "bun:test";
import { mockDay04ScoredCards } from "./day-04.mocks";

describe("ScoredCard", async () => {
  it("returns the Scored Cards", () => {
    const scores = mockDay04ScoredCards.map((scoredCard) => scoredCard.score);

    expect(scores).toEqual([
      {
        amount: 8,
        length: 4,
      },
      {
        amount: 2,
        length: 2,
      },
      {
        amount: 2,
        length: 2,
      },
      {
        amount: 1,
        length: 1,
      },
      {
        amount: 0,
        length: 0,
      },
      {
        amount: 0,
        length: 0,
      },
    ]);
  });
});
