/**
Problem Statement#
Given two lists of intervals, find the intersection of these two lists. 
Each list consists of disjoint intervals sorted on their start time.

Example 1:
Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.

Example 2:
Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists.
 */

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

/**
 *
 * @param {Interval[]} intervals_a
 * @param {Interval[]} intervals_b
 * @returns
 */
function get_intersection(intervals_a, intervals_b) {
  let result = [];

  let a_iter = 0;
  let b_iter = 0;

  while (a_iter < intervals_a.length && b_iter < intervals_b.length) {
    // check if a overlaps b
    const a_overlap_b =
      intervals_a[a_iter].start >= intervals_b[b_iter].start &&
      intervals_a[a_iter].start <= intervals_b[b_iter].end;
    // check if b overlaps a
    const b_overlap_a =
      intervals_b[b_iter].start >= intervals_a[a_iter].start &&
      intervals_b[b_iter].start <= intervals_a[a_iter].end;

    // if overlaps get intersection interval
    if (a_overlap_b || b_overlap_a) {
      result.push(
        new Interval(
          Math.max(intervals_a[a_iter].start, intervals_b[b_iter].start),
          Math.min(intervals_a[a_iter].end, intervals_b[b_iter].end)
        )
      );
    }

    // increament the iterator for the interval that finishes first
    if (intervals_a[a_iter].end < intervals_b[b_iter].end) {
      a_iter += 1;
    } else {
      b_iter += 1;
    }
  }

  return result;
}

process.stdout.write("Intervals Intersection: ");
let result = get_intersection(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write("Intervals Intersection: ");
result = get_intersection(
  [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
  [new Interval(5, 10)]
);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
