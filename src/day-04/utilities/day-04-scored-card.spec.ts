import { describe, expect, it } from "bun:test";
import { mockDay04ScoredCards } from "./day-04.mocks";

describe("ScoredCard", async () => {
  it("returns the Scored Cards", () => {
    const scores = mockDay04ScoredCards.map((scoredCard) => scoredCard.score);

    expect(scores).toEqual([8, 2, 2, 1, 0, 0]);
  });
});
