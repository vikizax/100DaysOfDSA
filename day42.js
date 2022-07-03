import { PriorityQueue } from "@datastructures-js/priority-queue";

/**
 * Revision: Day 39 t0 Day 41!
 */

/**
Day 39 Problem:
 Given a list of intervals representing the start and end time of ‘N’ meetings, 
find the minimum number of rooms required to hold all the meetings.

Example 1:
Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. 
[7,9] can 
occur in any of the two rooms later.

Example 2:
Meetings: [[6,7], [2,4], [8,12]]
Output: 1
Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.
 */
class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
/**
 * @param {Meeting[]} meetings
 */
function min_meeting_rooms(meetings) {
  let minRoom = 0;

  // sort the meeting on start time : ascending
  meetings.sort((a, b) => a.start - b.start);

  // keep minHeap on meeting end time: peek/front will have the meeting that is ending first/ have the smallest end time
  let minHeap = new PriorityQueue((a, b) => a.end - b.end);

  // iterate through all the meetings
  meetings.forEach((meeting) => {
    // if the minheap is not empty and the minheap peek end time does not overlap with the current meeting
    while (!minHeap.isEmpty() && meeting.start >= minHeap.front().end) {
      // remove the min end time meeting from heap
      minHeap.pop();
    }
    // add the current meeting to the heap
    minHeap.push(meeting);

    // total max count of meeting inside heap will the minimun room count
    minRoom = Math.max(minHeap.size(), minRoom);
  });

  return minRoom;
}

// console.log(
//   `Minimum meeting rooms required: ` +
//     `${min_meeting_rooms([
//       new Meeting(1, 4),
//       new Meeting(2, 5),
//       new Meeting(7, 9),
//     ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ` +
//     `${min_meeting_rooms([
//       new Meeting(6, 7),
//       new Meeting(2, 4),
//       new Meeting(8, 12),
//     ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ` +
//     `${min_meeting_rooms([
//       new Meeting(1, 4),
//       new Meeting(2, 3),
//       new Meeting(3, 6),
//     ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ` +
//     `${min_meeting_rooms([
//       new Meeting(4, 5),
//       new Meeting(2, 3),
//       new Meeting(2, 4),
//       new Meeting(3, 5),
//     ])}`
// );

/**
 Day 40 Problem:
Maximum CPU Load (hard)#
We are given a list of Jobs. Each job has a Start time, an End time, 
and a CPU load when it is running. Our goal is to find the maximum CPU 
load at any time if all the jobs are running on the same machine.

Example 1:
Jobs: [[1,4,3], [2,5,4], [7,9,6]]
Output: 7
Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
jobs are running at the same time i.e., during the time interval (2,4).

Example 2:
Jobs: [[6,7,10], [2,4,11], [8,12,15]]
Output: 15
Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.
 */

class Job {
  constructor(start, end, cpuLoad) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
}
/**
 *
 * @param {Job[]} jobs
 */
function find_max_cpu_load(jobs) {
  let maxLoad = 0;

  // sort jobs based on their start time: ascending
  jobs.sort((a, b) => a.start - b.start);

  // keep min heap of jobs ending time in ascending order
  const minHeap = new PriorityQueue((a, b) => a.end - b.end);

  let currentLoad = 0;
  jobs.forEach((job) => {
    while (!minHeap.isEmpty() && job.start >= minHeap.front().end) {
      currentLoad -= minHeap.pop().cpuLoad;
    }

    minHeap.push(job);
    currentLoad += job.cpuLoad;

    maxLoad = Math.max(currentLoad, maxLoad);
  });

  return maxLoad;
}

// console.log(
//   `Maximum CPU load at any time: ${find_max_cpu_load([
//     new Job(1, 4, 3),
//     new Job(2, 5, 4),
//     new Job(7, 9, 6),
//   ])}`
// );
// console.log(
//   `Maximum CPU load at any time: ${find_max_cpu_load([
//     new Job(6, 7, 10),
//     new Job(2, 4, 11),
//     new Job(8, 12, 15),
//   ])}`
// );
// console.log(
//   `"Maximum CPU load at any time: ${find_max_cpu_load([
//     new Job(1, 4, 2),
//     new Job(2, 4, 1),
//     new Job(3, 6, 5),
//   ])}`
// );

/**
Day41 Problem: 
Employee Free Time (hard)#
For ‘K’ employees, we are given a list of intervals representing 
the working hours of each employee. Our goal is to find out if there is a 
free interval that is common to all employees. 
You can assume that each list of employee working hours is sorted on the start time.

Example 1:
Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
Output: [3,5]
Explanation: Both the employees are free between [3,5].

Example 2:
Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
Output: [4,6], [8,9]
Explanation: All employees are free between [4,6] and [8,9].

Example 3:
Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
Output: [5,7]
Explanation: All employees are free between [5,7].
 */

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval;
    this.employeeIndex = employeeIndex;
    this.intervalIndex = intervalIndex;
  }
}

/**
 *
 * @param {Interval[][]} schedule
 * @returns {Interval[]}
 */
function find_employee_free_time(schedule) {
  const result = [];

  if (schedule === null || schedule.length === 0) return result;

  const minHeap = new PriorityQueue((a, b) => {
    return a.interval.start - b.interval.start;
  });

  for (let empIdx = 0; empIdx < schedule.length; empIdx++) {
    minHeap.push(new EmployeeInterval(schedule[empIdx][0], empIdx, 0));
  }

  let previousInterval = minHeap.front().interval;

  while (!minHeap.isEmpty()) {
    const currentEmployeeInterval = minHeap.pop();

    if (previousInterval.end < currentEmployeeInterval.interval.start) {
      result.push(
        new Interval(
          previousInterval.end,
          currentEmployeeInterval.interval.start
        )
      );
      previousInterval = currentEmployeeInterval.interval;
    } else {
      if (previousInterval.end < currentEmployeeInterval.interval.end) {
        previousInterval = currentEmployeeInterval.interval;
      }
    }

    const employeeIntervals = schedule[currentEmployeeInterval.employeeIndex];

    if (employeeIntervals.length > currentEmployeeInterval.intervalIndex + 1) {
      minHeap.push(
        new EmployeeInterval(
          schedule[currentEmployeeInterval.employeeIndex][
            currentEmployeeInterval.intervalIndex + 1
          ],
          currentEmployeeInterval.employeeIndex,
          currentEmployeeInterval.intervalIndex + 1
        )
      );
    }
  }

  return result;
}

let input = [
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
];
let intervals = find_employee_free_time(input);
let result = "Free intervals: ";
for (let i = 0; i < intervals.length; i++)
  result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (let i = 0; i < intervals.length; i++)
  result += intervals[i].get_interval();
console.log(result);

input = [
  [new Interval(1, 3)],
  [new Interval(2, 4)],
  [new Interval(3, 5), new Interval(7, 9)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (let i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);
