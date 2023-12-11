import { describe, expect, test } from 'bun:test'
import { SolveDay02Part1 } from './day-02-part-1'

describe("Day 02 Part 1", () => {
  test("Example", async () => {
    const file = import.meta.resolveSync("./day-02-part-1-example.txt");
    expect(await SolveDay02Part1(file)).toBe(123);
  });

  test("Input", async () => {
    const file = import.meta.resolveSync("./day-02-part-1-input.txt");
    expect(await SolveDay02Part1(file)).toBe(123);
  });
});