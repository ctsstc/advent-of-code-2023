import { describe, expect, test } from "bun:test";
import { Day02Part01Config, SolveDay02Part1 } from "./day-02-part-1";

describe("Day 02 Part 1", () => {
  const config: Day02Part01Config = {
    maxRed: 12,
    maxGreen: 13,
    maxBlue: 14,
  };

  test("Example", async () => {
    const file = import.meta.resolveSync("./day-02-part-1-example.txt");
    expect(await SolveDay02Part1(file, config)).toBe(8);
  });

  test("Input", async () => {
    const file = import.meta.resolveSync("./day-02-part-1-input.txt");
    expect(await SolveDay02Part1(file, config)).toBe(2348);
  });
});
