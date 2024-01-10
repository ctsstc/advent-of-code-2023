import { describe, expect, test } from "bun:test";
import { SolveDay05Part1 } from "./day-05-part-1";

describe("Day 05 Part 1", async () => {
  const exampleFile = import.meta.resolveSync("../day-05-example.txt");
  const solveExample = await SolveDay05Part1(exampleFile);
  const expectedExample = 35;

  test("Example", async () => {
    expect(solveExample).toBe(expectedExample);
  });

  test.skipIf(solveExample !== expectedExample)("Input", async () => {
    const file = import.meta.resolveSync("../day-05-input.txt");
    expect(await SolveDay05Part1(file)).toBe(123);
  });
});
