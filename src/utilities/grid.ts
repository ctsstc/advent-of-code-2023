import { Cell } from "./cell";

export class Grid<T> {
  private cells: Cell<T>[][];

  constructor(lines: string[], mapper: (character: string) => T) {
    this.cells = lines.map((line, y) =>
      line
        .split("")
        .map((character, x) => new Cell(mapper(character), x, y, this))
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

  find(predicate: (value: Cell<T>, index: number, obj: Cell<T>[]) => boolean) {
    return this.cells.flat().find(predicate);
  }
}

export class StringGrid extends Grid<string> {
  constructor(lines: string[]) {
    super(lines, (character: string) => character);
  }
}
