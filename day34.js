/**
 * Similar Problems#
 * Problem 1: Given a set of intervals, find out if any two intervals overlap.

Example:

Intervals: [[1,4], [2,5], [7,9]]
Output: true
Explanation: Intervals [1,4] and [2,5] overlap

*/
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return `[${this.start}, ${this.end}]`;
  }
}

/**
 *
 * @param {Interval[]} intervals
 * @returns
 */
function hasMergingIntervals(intervals) {
  intervals.sort((a, b) => a.start - b.start);

  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    if (currentInterval.start <= end) {
      return true;
    } else {
      start = currentInterval.start;
      end = currentInterval.end;
    }
  }
  return false;
}

console.log(
  hasMergingIntervals([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9),
  ]),
  "=== true"
);

console.log(
  hasMergingIntervals([
    new Interval(1, 4),
    new Interval(5, 8),
    new Interval(9, 10),
  ]),
  "=== false"
);
