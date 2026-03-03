/**
 * Find the index of the first element in an array that satisfies a predicate function.
 *
 * @param arr - The array to search
 * @param predicate - The predicate function to test elements
 * @param ctx - Optional context to bind to the predicate
 * @returns The index of the first element that passes the test, or -1 if none pass
 *
 * @example
 * ```
 * import arrayFindIndex = require('array-find-index');
 *
 * arrayFindIndex([1, 2, 3], n => n % 2 === 1);
 * //=> 0
 *
 * arrayFindIndex(['a', 'b', 'c'], s => s.length > 1);
 * //=> -1
 * ```
 */
declare function arrayFindIndex<T>(
  arr: T[],
  predicate: (value: T, index: number, array: T[]) => unknown,
  ctx?: unknown
): number;

declare function arrayFindIndex<T>(
  arr: ArrayLike<T>,
  predicate: (value: T, index: number, array: ArrayLike<T>) => unknown,
  ctx?: unknown
): number;

export = arrayFindIndex;
