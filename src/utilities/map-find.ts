/**
 * Thanks to the original here:
 * - https://stackoverflow.com/questions/57760111/javascript-map-find-at-the-same-time-findmap
 * Types have been added by CTS_AE/ctsstc and contributed back to the above wiki.
 * */

function* map<T, U>(a: T[], fn: (x: T, idx?: number) => U) {
  for (const [idx, val] of a.entries()) yield fn(val, idx);
}

function find<T>(
  a: Generator<T, void, unknown>,
  fn: (x: T, idx?: number) => boolean
) {
  for (let x of a) if (fn(x)) return x;
}

export function mapFind<T, U>(
  collection: T[],
  mapper: (item: T, idx?: number) => U,
  finder: (item: U) => boolean
): U | undefined {
  const mapperGenerator = map(collection, mapper);

  return find(mapperGenerator, finder);
}
