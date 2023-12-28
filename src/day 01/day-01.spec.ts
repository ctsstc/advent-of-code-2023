import { describe, expect, test } from "bun:test";
import { solveDay01, solveDay01Part2 } from "./day-01";

describe("Part 1", () => {
  test("example.txt", async () => {
    expect(await solveDay01(import.meta.resolveSync("./example.txt"))).toBe(
      142
    );
  });

  test("input.txt", async () => {
    expect(await solveDay01(import.meta.resolveSync("./input.txt"))).toBe(
      55712
    );
  });
});

describe("Part 2", () => {
  test("example-part-2.txt", async () => {
    expect(
      await solveDay01Part2(import.meta.resolveSync("./example-part-2.txt"))
    ).toBe(281);
  });

  test("input.txt", async () => {
    expect(await solveDay01Part2(import.meta.resolveSync("./input.txt"))).toBe(
      55413
    );
  });
});
