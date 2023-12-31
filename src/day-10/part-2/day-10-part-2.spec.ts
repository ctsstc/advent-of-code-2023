import { describe, expect, test } from "bun:test";
import { SolveDay10Part2 } from "./day-10-part-2";

describe.skip("Day 10 Part 2", () => {
  test("Example", async () => {
    const file = import.meta.resolveSync("./day-10-part-2-example.txt");
    expect(await SolveDay10Part2(file)).toBe(123);
  });

  test("Input", async () => {
    const file = import.meta.resolveSync("./day-10-part-2-input.txt");
    expect(await SolveDay10Part2(file)).toBe(123);
  });
});
