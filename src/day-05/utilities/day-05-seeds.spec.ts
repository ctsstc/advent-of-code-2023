import { describe, expect, it } from "bun:test";
import { day05Seeds } from "./day-05-seeds";

describe("Day 05 > Seeds", () => {
  const firstLine = "seeds: 79 14 55 13";

  it("returns the seeds", () => {
    expect(day05Seeds(firstLine)).toEqual([79, 14, 55, 13]);
  });
});
