/**
 * return range of numbers
 *
 * @param min {number}
 * @param max {number}
 */
export function range(min: number, max: number): number[] {
  return Array.from({ length: max - min }).map((value, index) => min + index)
}
