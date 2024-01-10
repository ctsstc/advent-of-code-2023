import { describe, expect, it } from "bun:test";
import { day05ParseHeader } from "./day-05-header";

describe("Day 05 > Header", () => {
  const headerString = "seed-to-soil map:";

  it("parses the header ", () => {
    expect(day05ParseHeader(headerString)).toEqual({
      from: "seed",
      to: "soil",
    });
  });
});
