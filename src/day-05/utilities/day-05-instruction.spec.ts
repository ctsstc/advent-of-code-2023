import { describe, expect, it } from "bun:test";
import { day05ParseInstruction } from "./day-05-instruction";

describe("Day 05 > Converter", () => {
  const converterString = "50 98 2";

  it("converts to a converter", () => {
    expect(day05ParseInstruction(converterString)).toEqual({
      source: 98,
      destination: 50,
      range: 2,
    });
  });
});
