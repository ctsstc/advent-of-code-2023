import { Cell } from "../../utilities/cell";
import { enumHasValue } from "../../utilities/enum-helpers";
import { getLines } from "../../utilities/files";
import { Grid } from "../../utilities/grid";
import { mapFind } from "../../utilities/map-find";
import { isDefined } from "../../utilities/type-guards";

// const mapDirections: Record<string, string[]> = {
//   "|": ["north", "south"],
//   "-": ["west", "east"],
//   L: ["north", "east"],
//   J: ["north", "west"],
//   7: ["south", "west"],
//   F: ["south", "east"],
//   S: ["north", "south", "east", "west"],
// };

enum Ordinal {
  // Start,
  North,
  East,
  South,
  West,
}

enum Pipe {
  Start = "S",
  Vertical = "|",
  Horizontal = "-",
  TopRight = "L",
  RightDown = "F",
  DownLeft = "7",
  LeftTop = "J",
  Nothing = ".",
}

// These could be encoded into a hash lookup like R7 (right 7)
const validMoves = {
  [Ordinal.North]: [Pipe.Start, Pipe.Vertical, Pipe.DownLeft, Pipe.RightDown],
  [Ordinal.East]: [Pipe.Start, Pipe.Horizontal, Pipe.LeftTop, Pipe.DownLeft],
  [Ordinal.South]: [Pipe.Start, Pipe.Vertical, Pipe.TopRight, Pipe.LeftTop],
  [Ordinal.West]: [Pipe.Start, Pipe.Horizontal, Pipe.TopRight, Pipe.RightDown],
};

function isValidMove(direction: Ordinal, pipe: Pipe): boolean {
  return validMoves[direction].includes(pipe);
}

// This maps the direction a pipe is flowing
// Given the last direction and the current character
const nextDirection = {
  // Came from the South
  [Ordinal.North]: {
    [Pipe.Vertical]: Ordinal.South,
    [Pipe.TopRight]: Ordinal.East,
    [Pipe.LeftTop]: Ordinal.West,
  },
  // Came from the West
  [Ordinal.East]: {
    [Pipe.Horizontal]: Ordinal.West,
    [Pipe.TopRight]: Ordinal.North,
    [Pipe.RightDown]: Ordinal.South,
  },
  // Came from the North
  [Ordinal.South]: {
    [Pipe.Vertical]: Ordinal.North,
    [Pipe.DownLeft]: Ordinal.West,
    [Pipe.RightDown]: Ordinal.East,
  },
  // Came from the East
  [Ordinal.West]: {
    [Pipe.Horizontal]: Ordinal.East,
    [Pipe.LeftTop]: Ordinal.North,
    [Pipe.DownLeft]: Ordinal.South,
  },
};

function getNextDirection(
  currentPipe: Pipe,
  lastOrdinal: Ordinal
): Ordinal | undefined {
  const ordinalLookup = nextDirection[lastOrdinal];

  // console.log("ORDINAL LOOKUP", { currentPipe, lastOrdinal, ordinalLookup });

  if (currentPipe in ordinalLookup) {
    // @ts-ignore
    return ordinalLookup[currentPipe];
  }
}

function getCellFromOrdinal(
  cell: Cell<Pipe>,
  ordinal: Ordinal
): Cell<Pipe> | undefined {
  const cellFromOrdinal = {
    [Ordinal.North]: cell.up.bind(cell),
    [Ordinal.East]: cell.right.bind(cell),
    [Ordinal.South]: cell.down.bind(cell),
    [Ordinal.West]: cell.left.bind(cell),
  };

  return cellFromOrdinal[ordinal]();
}

function getOppositeDirection(ordinal: Ordinal): Ordinal {
  const opposite = {
    [Ordinal.North]: Ordinal.South,
    [Ordinal.East]: Ordinal.West,
    [Ordinal.South]: Ordinal.North,
    [Ordinal.West]: Ordinal.East,
  };

  return opposite[ordinal];
}

function traverse(
  currentCell: Cell<Pipe>,
  lastDirection: Ordinal,
  path: Cell<Pipe>[] = []
): Cell<Pipe>[] | undefined {
  const currentPipe = currentCell.value;
  const nextDirection = getNextDirection(currentPipe, lastDirection);

  // console.log("🚀 TRAVERSE", {
  //   currentCell: currentCell.toString(),
  //   lastDirection,
  //   path: path.map((x) => x.toString()),
  //   currentPipe,
  //   nextDirection,
  //   isValidMove:
  //     nextDirection !== undefined && isValidMove(nextDirection, currentPipe),
  // });

  if (nextDirection === undefined) return;

  const nextCell = getCellFromOrdinal(currentCell, nextDirection);

  if (nextCell === undefined || nextCell.value === Pipe.Nothing) return;

  const validMove = isValidMove(nextDirection, nextCell?.value);

  if (!validMove) return;

  const oppositeDirectionOfNext = getOppositeDirection(nextDirection);

  path.push(nextCell);

  // We made our loop! 🎉
  if (nextCell.value === Pipe.Start) return path;

  return traverse(nextCell, oppositeDirectionOfNext, path);
}

export async function SolveDay10Part1(filePath: string): Promise<number> {
  const lines = await getLines(filePath);
  const grid = new Grid<Pipe>(lines, (character) =>
    enumHasValue(Pipe, character) ? <Pipe>character : Pipe.Nothing
  );
  const startingCell = grid.find((cell) => cell.value === Pipe.Start);

  if (startingCell === undefined)
    throw new Error("Starting Cell Not Found! 😱");

  // 3 checks exhausts loop possibilities from the starting position.
  //  The last one would have had to have been connected to one of the other three.
  const up = startingCell.up();
  const right = startingCell.right();
  const down = startingCell.down();

  const cellsToTry = [up, right, down].filter(isDefined);

  const foundLoop = mapFind(
    cellsToTry,
    (cell, i) => {
      const direction = <Ordinal>i;
      const lastDirection = getOppositeDirection(direction);
      return traverse(cell, lastDirection);
    },
    (result) => result !== undefined
  );

  // console.log("🔥🔥🔥 FOUND LOOP: ", {
  //   foundLoop: foundLoop?.map((x) => x.value),
  // });

  if (foundLoop === undefined) throw new Error("Loop Not Found :RIP:");

  return (foundLoop.length + 1) / 2;
}
