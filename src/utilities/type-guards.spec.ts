import { describe, expect, it } from "bun:test";
import { isDefined } from "./type-guards";

describe("Type Guards", () => {
  describe("isDefined", () => {
    it("removes undefined from a collection", () => {
      const collection = [1, undefined, 2];
      const filtered = collection.filter(isDefined);

      expect(filtered).toHaveLength(2);
    });
  });
});
