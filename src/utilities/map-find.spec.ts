import { describe, expect, it, mock } from "bun:test";
import { mapFind } from "./map-find";

describe("findMap", () => {
  const collection = [2, 5, 78, 4];
  const expensiveFunction = mock((n: number) => {
    console.log("expensiveFunction for", n);
    return 2 * n + ""; // Wanting to test with the change of types
  });
  const condition = (x: string) => x.length > 2;
  const result = mapFind(collection, expensiveFunction, condition);

  it("only calls the expensive function 3 times", () => {
    expect(expensiveFunction).toHaveBeenCalledTimes(3);
  });

  it("returns the expected result", () => {
    expect(result).toEqual("156");
  });
});
