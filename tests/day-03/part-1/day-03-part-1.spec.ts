import { describe, expect, test } from 'bun:test'
import { SolveDay03Part1 } from './day-03-part-1'

describe("Day 03 Part 1", () => {
  test("Example", async () => {
    const file = import.meta.resolveSync("./day-03-part-1-example.txt");
    expect(await SolveDay03Part1(file)).toBe(123);
  });

  test("Input", async () => {
    const file = import.meta.resolveSync("./day-03-part-1-input.txt");
    expect(await SolveDay03Part1(file)).toBe(123);
  });
});