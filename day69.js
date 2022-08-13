const Heap = require("collections/heap");
/**

Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

Example 1:

Input: nums=[1, 2, -1, 3, 5], k = 2
Output: [1.5, 0.5, 1.0, 4.0]
Explanation: Lets consider all windows of size ‘2’:

[ 1, 2, -1, 3, 5] -> median is 1.5
[1, 2, -1, 3, 5] -> median is 0.5
[1, 2, -1, 3, 5] -> median is 1.0
[1, 2, -1, 3, 5] -> median is 4.0
Example 2:

Input: nums=[1, 2, -1, 3, 5], k = 3
Output: [1.0, 2.0, 3.0]
Explanation: Lets consider all windows of size ‘3’:

[1, 2, -1, 3, 5] -> median is 1.0
[1, 2, -1, 3, 5] -> median is 2.0
[1, 2, -1, 3, 5] -> median is 3.0

 */

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap([], null, (a, b) => a - b);
    this.minHeap = new Heap([], null, (a, b) => b - a);
  }

  findSlidingWindowMedian(nums, k) {
    const result = Array(nums.length - k + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.#insertNum(nums[i]);

      if (i - k + 1 >= 0) {
        if (this.maxHeap.length === this.minHeap.length) {
          result[i - k + 1] = (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        } else {
          result[i + 1 - k] = this.maxHeap.peek();
        }

        // remove the number from heap that is going out of k size window
        const numberToRemove = nums[i + 1 - k];
        if (numberToRemove <= this.maxHeap.peek()) {
          this.maxHeap.delete(numberToRemove);
        } else {
          this.minHeap.delete(numberToRemove);
        }

        this.#balanceHeap();
      }
    }
    return result;
  }

  #insertNum(num) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    this.#balanceHeap();
  }

  #balanceHeap() {
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }
}

let slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.findSlidingWindowMedian([1, 2, -1, 3, 5], 2);
console.log(`Sliding window medians are: ${result}`);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.findSlidingWindowMedian([1, 2, -1, 3, 5], 3);
console.log(`Sliding window medians are: ${result}`);
