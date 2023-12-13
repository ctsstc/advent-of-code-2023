import { getLines } from "../../utilities/files";

export async function SolveDay03Part1(filePath: string): Promise<number> {
  const lines = await getLines(filePath);

  /**
   *
   * Idea 1: use regex to grab numbers; might have to count length and initial starting location if possible.
   *  This might be complex though for calculating numbers around symbols
   *
   * Idea 2: walk the array, build a "number" instance as you walk and the next thing is a number.
   *  Every number you build check around to see if there's a symbol near by.
   *  If there is mark that instance as valid
   *  Then filter the numbers at the end if they are valid.
   *
   * Idea 3: Find symbols, then check if there's a number around them.
   *  There are 8 permutations around a symbol
   *
   * Thoughts:
   *  - Numbers should not be counted twice if two symbols touch the same number.
   *      - Numbers should be classified in a way that makes them unique - a starting and end range
   */

  return 0;
}
