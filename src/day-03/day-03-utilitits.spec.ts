import { describe, expect, it } from "bun:test";
import { day03ParseLine, day03ParseLines } from "./day-03-utilities";

const line = "467..114..";
const line2 = "...*......";
const line3 = ".123..*.456";

describe("Day 03 > Parse Line", () => {
  it("parses the line", () => {
    const parsed = day03ParseLine(line, 0);

    expect(parsed).toStrictEqual({
      numbers: [
        {
          x: 0,
          y: 0,
          value: 467,
          length: 3,
        },
        {
          x: 5,
          y: 0,
          value: 114,
          length: 3,
        },
      ],
      symbols: [],
    });
  });

  it("parses line 2", () => {
    const parsed = day03ParseLine(line2, 1);

    expect(parsed).toEqual({
      numbers: [],
      symbols: [
        {
          x: 3,
          y: 1,
        },
      ],
    });
  });

  it("parses line 3", () => {
    const parsed = day03ParseLine(line3, 2);

    expect(parsed).toEqual({
      numbers: [
        {
          x: 1,
          y: 2,
          value: 123,
          length: 3,
        },
        {
          x: 8,
          y: 2,
          value: 456,
          length: 3,
        },
      ],
      symbols: [
        {
          x: 6,
          y: 2,
        },
      ],
    });
  });
});

describe.only("Day 03 > Parse Lines", () => {
  const lines = [line, line2, line3];

  it("parses all the lines!!!", () => {
    const parsed = day03ParseLines(lines);

    expect(parsed).toEqual({
      numbers: [
        {
          x: 0,
          y: 0,
          value: 467,
          length: 3,
        },
        {
          x: 5,
          y: 0,
          value: 114,
          length: 3,
        },
        {
          x: 1,
          y: 2,
          value: 123,
          length: 3,
        },
        {
          x: 8,
          y: 2,
          value: 456,
          length: 3,
        },
      ],
      symbols: [
        {
          x: 3,
          y: 1,
        },
        {
          x: 6,
          y: 2,
        },
      ],
    });
  });
});
