import { describe, expect, test } from "bun:test";
import { SolveDay03Part2 } from "./day-03-part-2";

describe("Day 03 Part 2", () => {
  test("Example", async () => {
    const file = import.meta.resolveSync("./day-03-example.txt");
    expect(await SolveDay03Part2(file)).toBe(123);
  });

  test("Input", async () => {
    const file = import.meta.resolveSync("./day-03-input.txt");
    expect(await SolveDay03Part2(file)).toBe(123);
  });
});
