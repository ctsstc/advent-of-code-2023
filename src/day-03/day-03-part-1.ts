import { getLines } from "../utilities/files";
import { day03ParseLines, day03ValidNumbers } from "./day-03-utilities";

/**
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
 *  - The top & bottom side can only contain 1 or 2 numbers
 *    - Left and Right can only have 1 number.
 *    - There can only then be 6 numbers max per symbol
 *
 * - I think having a way to classify numbers and then check if they belong to a range would work great.
 *    - This would also mean there should be a way of classifying symbols.
 *    - Then all symbols can check against numbers to see if they fall in its range.
 *
 */

export async function SolveDay03Part1(filePath: string): Promise<number> {
  const lines = await getLines(filePath);
  const collection = day03ParseLines(lines);
  const validNumbers = day03ValidNumbers(collection);

  const sum = validNumbers.reduce((sum, number) => sum + number.value, 0);

  return sum;
}
