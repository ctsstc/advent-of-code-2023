import { describe, expect, test } from "bun:test";
import { SolveDay04Part1 } from "./day-04-part-1";

describe("Day 04 Part 1", () => {
  test("Example", async () => {
    const file = import.meta.resolveSync("./day-04-part-1-example.txt");
    expect(await SolveDay04Part1(file)).toBe(13);
  });

  test("Input", async () => {
    const file = import.meta.resolveSync("./day-04-part-1-input.txt");
    expect(await SolveDay04Part1(file)).toBe(123);
  });
});
