import { expect, test } from 'bun:test'
import { solveDay01 } from './day-01'

test('example',async () => {
  expect(await solveDay01("tests/day 01/example.txt")).toBe(142)
})
