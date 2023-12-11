import { describe, expect, test } from 'bun:test'
import { SolveDay02Part2 } from './day-02-part-2'

describe("Day 02 Part 2", () => {
  test("Example", async () => {
    const file = import.meta.resolveSync("./day-02-part-2-example.txt");
    expect(await SolveDay02Part2(file)).toBe(123);
  });

  test("Input", async () => {
    const file = import.meta.resolveSync("./day-02-part-2-input.txt");
    expect(await SolveDay02Part2(file)).toBe(123);
  });
});