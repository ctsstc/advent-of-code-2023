import { describe, expect, it } from "bun:test";
import { Grid } from "./grid";

describe("Grid", () => {
  describe("populated grid", () => {
    const grid = new Grid(["abc", "123"]);

    it("has a height of 2", () => {
      expect(grid.height).toEqual(2);
    });

    it("has a width of 3", () => {
      expect(grid.width).toEqual(3);
    });

    describe("grid.get", () => {
      it("returns the expected cell", () => {
        const returnedCell = grid.get(2, 1);

        expect(returnedCell?.value).toEqual("3");
      });
    });
  });

  describe("empty grid", () => {
    const grid = new Grid([]);

    it("has 0 height", () => {
      expect(grid.height).toEqual(0);
    });

    it("has 0 width", () => {
      expect(grid.width).toEqual(0);
    });
  });
});
