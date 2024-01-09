import { describe, expect, test } from "bun:test";
import { SolveDay04Part2 } from "./day-04-part-2";

describe("Day 04 Part 2", async () => {
  const exampleFile = import.meta.resolveSync("../day-04-example.txt");
  const day2SolveExample = await SolveDay04Part2(exampleFile);

  test("Example", async () => {
    expect(day2SolveExample).toBe(30);
  });

  test.skipIf(day2SolveExample !== 30)("Input", async () => {
    const file = import.meta.resolveSync("../day-04-input.txt");
    expect(await SolveDay04Part2(file)).toBe(123);
  });
});
