import { describe, expect, test } from 'bun:test'
import { SolveDay05Part2 } from './day-05-part-2'

describe("Day 05 Part 2", async () => {
  const exampleFile = import.meta.resolveSync("../day-05-example.txt");
  const solveExample = await SolveDay05Part2(exampleFile)
  const expectedExample = 123;

  test("Example", async () => {
    expect(solveExample).toBe(expectedExample);
  });

  test.skipIf(solveExample !== expectedExample)("Input", async () => {
    const file = import.meta.resolveSync("../day-05-input.txt");
    expect(await SolveDay05Part2(file)).toBe(123);
  });
});