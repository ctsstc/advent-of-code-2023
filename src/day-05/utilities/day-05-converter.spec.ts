import { describe, expect, it } from "bun:test";
import { day05ParseConverter } from "./day-05-converter";

describe("Day 05 > Converter", () => {
  const converterString = "50 98 2";

  it("converts to a converter", () => {
    expect(day05ParseConverter(converterString)).toEqual({
      source: 98,
      destination: 50,
      range: 2,
    });
  });
});
