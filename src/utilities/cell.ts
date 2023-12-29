import { Grid } from "./grid";

export class Cell<T> {
  constructor(
    public value: T,
    public x: number,
    public y: number,
    private grid: Grid<T>
  ) {}

  up() {
    if (this.y == 0) return undefined;

    return this.grid.get(this.x, this.y - 1);
  }

  down() {
    if (this.y + 1 == this.grid.height) return undefined;

    return this.grid.get(this.x, this.y + 1);
  }

  left() {
    if (this.x == 0) return undefined;

    return this.grid.get(this.x - 1, this.y);
  }

  right() {
    if (this.x + 1 == this.grid.width) return undefined;

    return this.grid.get(this.x + 1, this.y);
  }

  equals(cell: Cell<T>) {
    return Object.is(this, cell);
  }

  toString() {
    return `${this.value} => x: ${this.x}, y: ${this.y}`;
  }
}
