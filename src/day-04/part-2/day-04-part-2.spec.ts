import { describe, expect, test } from "bun:test";
import { SolveDay04Part2 } from "./day-04-part-2";

describe.skip("Day 04 Part 2", () => {
  test("Example", async () => {
    const file = import.meta.resolveSync("./day-04-part-2-example.txt");
    expect(await SolveDay04Part2(file)).toBe(123);
  });

  test("Input", async () => {
    const file = import.meta.resolveSync("./day-04-part-2-input.txt");
    expect(await SolveDay04Part2(file)).toBe(123);
  });
});
