import { describe, expect, it } from "bun:test";
import { getLines } from "../utilities/files";
import { day03ValidGearsWithNumbers } from "./day-03-gear";
import { day03ParseLines } from "./day-03-utilities";

describe("Day 03 > Gear", async () => {
  const example = import.meta.resolveSync("./day-03-example.txt");
  const exampleLines = await getLines(example);
  const collection = day03ParseLines(exampleLines);
  const validGears = day03ValidGearsWithNumbers(collection);

  it("returns valid gears and their numbers", () => {
    expect(validGears).toMatchSnapshot();
  });
});
