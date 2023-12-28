import { describe, expect, it } from "bun:test";
import { Grid } from "./grid";

describe("Cell", () => {
  const grid = new Grid(["abc", "123", "xyz"]);
  const cell = grid.get(1, 1);
  const topRight = grid.get(2, 0);
  const bottomLeft = grid.get(0, 2);

  if (cell === undefined || topRight == undefined || bottomLeft == undefined)
    throw new Error("cell not found, but should have been");

  it("has the expected cell value", () => {
    expect(cell.value).toEqual("2");
  });

  it("has the expected x value", () => {
    expect(cell.x).toEqual(1);
  });

  it("has the expected y value", () => {
    expect(cell.y).toEqual(1);
  });

  it("has b above it", () => {
    expect(cell.up()?.value).toEqual("b");
  });

  it("has 3 to the right of it", () => {
    expect(cell.right()?.value).toEqual("3");
  });

  it("has y below it", () => {
    expect(cell.down()?.value).toEqual("y");
  });

  it("has 1 to the left of it", () => {
    expect(cell.left()?.value).toEqual("1");
  });

  describe("get cell out of bounds", () => {
    it("returns undefined", () => {
      expect(grid.get(5, 5)).toBeUndefined();
    });
  });

  describe("top boundary", () => {
    it("returns undefined", () => {
      expect(topRight?.up()).toBeUndefined();
    });
  });

  describe("right boundary", () => {
    it("returns undefined", () => {
      expect(topRight?.right()).toBeUndefined();
    });
  });

  describe("bottom boundary", () => {
    it("returns undefined", () => {
      expect(bottomLeft?.down()).toBeUndefined();
    });
  });

  describe("left boundary", () => {
    it("returns undefined", () => {
      expect(bottomLeft?.left()).toBeUndefined();
    });
  });

  describe("#equals", () => {
    it("is the same cell", () => {
      const traversedCell = bottomLeft?.right()?.up();

      if (traversedCell === undefined)
        throw new Error("Did not find traversed cell");

      expect(cell.equals(traversedCell)).toBeTrue();
    });

    it("is not the same cell", () => {
      expect(cell.equals(topRight)).toBeFalse();
    });
  });
});
