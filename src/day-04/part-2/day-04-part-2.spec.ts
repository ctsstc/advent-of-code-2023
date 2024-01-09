import { describe, expect, test } from "bun:test";
import { SolveDay04Part2 } from "./day-04-part-2";

describe("Day 04 Part 2", async () => {
  const exampleFile = import.meta.resolveSync("../day-04-example.txt");
  const day2SolveExample = await SolveDay04Part2(exampleFile);
  const day2ExpectedExampleSolve = BigInt(30);

  test("Example", async () => {
    expect(day2SolveExample).toBe(day2ExpectedExampleSolve);
  });

  test.skipIf(day2SolveExample !== day2ExpectedExampleSolve)(
    "Input",
    async () => {
      const file = import.meta.resolveSync("../day-04-input.txt");
      expect(await SolveDay04Part2(file)).toBe(BigInt(5704953));
    }
  );
});
