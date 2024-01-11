import { describe, expect, it } from "bun:test";
import { day05Seeds, day05SeedsPart2 } from "./day-05-seeds";

const firstLine = "seeds: 79 14 55 13";

describe("Day 05 > Seeds", () => {
  it("returns the seeds", () => {
    expect(day05Seeds(firstLine)).toEqual([79, 14, 55, 13]);
  });
});

describe("Day 05 > Seeds Part 2", () => {
  it("returns the seeds", () => {
    expect(day05SeedsPart2(firstLine)).toEqual([
      // range of: 14 values
      79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
      // range of: 13 values
      55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
    ]);
  });
});
