import { describe, expect, it } from "bun:test";
import { Grid, StringGrid } from "./grid";

describe("StringGrid", () => {
  describe("populated grid", () => {
    const grid = new StringGrid(["abc", "123"]);
    const cell3 = grid.get(2, 1);

    if (cell3 === undefined) throw new Error("Cell not found");

    it("has a height of 2", () => {
      expect(grid.height).toEqual(2);
    });

    it("has a width of 3", () => {
      expect(grid.width).toEqual(3);
    });

    describe("#get", () => {
      it("returns the expected cell", () => {
        expect(cell3.value).toEqual("3");
      });
    });

    describe("#find", () => {
      const found = grid.find((cell) => cell.value === "3");

      it("finds and returns the expected cell", () => {
        expect(found?.equals(cell3)).toBeTrue();
      });
    });
  });

  describe("empty grid", () => {
    const grid = new Grid([], (char) => char);

    it("has 0 height", () => {
      expect(grid.height).toEqual(0);
    });

    it("has 0 width", () => {
      expect(grid.width).toEqual(0);
    });
  });
});
