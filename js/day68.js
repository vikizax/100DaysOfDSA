const { PriorityQueue } = require("@datastructures-js/priority-queue");
/** 
Problem Statement#
Design a class to calculate the median of a number stream. 
The class should have the following two methods:

1. insertNum(int num): stores the number in the class
2. findMedian(): returns the median of all numbers inserted in the class
If the count of numbers inserted in the class is even, the median will be the average of the middle two numbers.

for example: 
1. insertNum(3)
2. insertNum(1)
3. findMedian() -> output: 2
4. insertNum(5)
5. findMedian() -> output: 3
6. insertNum(4)
7. findMedian() -> output: 3.5
 */
class MedianOfAStream {
  constructor() {
    this.maxHeap = new PriorityQueue((a, b) => b - a);
    this.minHeap = new PriorityQueue((a, b) => a - b);
  }

  insertNum(num) {
    if (this.maxHeap.size() === 0 || this.maxHeap.front() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    this.#balanceHeap();
  }

  #balanceHeap() {
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.size() < this.minHeap.size()) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  findMedian() {
    if (this.maxHeap.size() === this.minHeap.size())
      return (this.maxHeap.front() + this.minHeap.front()) / 2;
    return this.maxHeap.front();
  }
}

const medianOfAStream = new MedianOfAStream();
medianOfAStream.insertNum(3);
medianOfAStream.insertNum(1);
console.log(`The median is: ${medianOfAStream.findMedian()}`);
medianOfAStream.insertNum(5);
console.log(`The median is: ${medianOfAStream.findMedian()}`);
medianOfAStream.insertNum(4);
console.log(`The median is: ${medianOfAStream.findMedian()}`);
