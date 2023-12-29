import { describe, expect, it } from "bun:test";
import { enumHasValue } from "./enum-helpers";

describe("utilities", () => {
  describe("enumHasValue", () => {
    enum Testing {
      North = "N",
      East = "E",
      South = "S",
      West = "W",
    }

    it("should return true if the enum contains the value", () => {
      expect(enumHasValue(Testing, "E")).toBeTrue();
    });

    it("should return false if the enum does not contain the value", () => {
      expect(enumHasValue(Testing, "something else")).toBeFalse();
    });
  });
});
