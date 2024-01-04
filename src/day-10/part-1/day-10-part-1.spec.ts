import { describe, expect, test } from "bun:test";
import { SolveDay10Part1 } from "./day-10-part-1";

describe.skip("Day 10 Part 1", () => {
  test("Example", async () => {
    const file = import.meta.resolveSync("./day-10-part-1-example.txt");
    expect(await SolveDay10Part1(file)).toBe(8);
  });

  test("Input", async () => {
    const file = import.meta.resolveSync("./day-10-part-1-input.txt");
    expect(await SolveDay10Part1(file)).toBe(6697);
  });
});
