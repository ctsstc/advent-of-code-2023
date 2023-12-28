import { Cell } from "./cell";

export class Grid {
  private cells: Cell<string>[][];

  constructor(lines: string[]) {
    this.cells = lines.map((line, y) =>
      line.split("").map((character, x) => new Cell(character, x, y, this))
    );
  }

  get(x: number, y: number) {
    return this.cells.at(y)?.at(x);
  }

  get height() {
    return this.cells.length;
  }

  get width() {
    return this.cells.at(0)?.length ?? 0;
  }

  find(
    predicate: (
      value: Cell<string>,
      index: number,
      obj: Cell<string>[]
    ) => boolean
  ) {
    return this.cells.flat().find(predicate);
  }
}
