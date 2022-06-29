/**
 * MIN HEAP : Implementation!
 *
 * get left child: index * 2
 * get right child: index * 2 + 1
 * get parent : index / 2
 * 
 * time complexity:
 * get the minimun num: O(1);
 * insertion: O(logn)
 * remove: O(logn)
 * sort: O(nlogn)
 */
class MinHeap {
  #heap = [null];

  get getHeapLength() {
    return this.#heap.length - 1;
  }

  get heapifyArr() {
    return this.#heap;
  }

  leftChildIdx(idx) {
    return idx * 2;
  }

  rigthChildIdx(idx) {
    return idx * 2 + 1;
  }

  childParentIdx(idx) {
    return Math.floor(idx / 2);
  }

  insert(num) {
    this.#heap.push(num);
    // if there is more than 1 nums inside heap
    if (this.#heap.length > 2) {
      let idx = this.getHeapLength;
      while (this.#heap[idx] < this.#heap[this.childParentIdx(idx)]) {
        if (idx >= 1) {
          [this.#heap[this.childParentIdx(idx)], this.#heap[idx]] = [
            this.#heap[idx],
            this.#heap[this.childParentIdx(idx)],
          ];
          if (this.childParentIdx(idx) > 1) {
            idx = this.childParentIdx(idx);
          } else {
            break;
          }
        }
      }
    }
  }

  remove() {
    let smallest = this.#heap[1];
    this.#heap[1] = this.#heap[this.#heap.length - 1];
    if (this.#heap.length === 2) {
      this.#heap.pop();
    } else if (this.#heap.length > 2) {
      this.#heap.pop();
      if (this.#heap.length === 3) {
        if (this.#heap[1] > this.#heap[2]) {
          [this.#heap[1], this.#heap[2]] = [this.#heap[2], this.#heap[1]];
        }
        return smallest;
      }
      let idx = 1;
      let left = this.leftChildIdx(idx);
      let right = this.rigthChildIdx(idx);
      while (
        this.#heap[idx] >= this.#heap[left] ||
        this.#heap[idx] >= this.#heap[right]
      ) {
        if (this.#heap[left] < this.#heap[right]) {
          [this.#heap[idx], this.#heap[left]] = [
            this.#heap[left],
            this.#heap[idx],
          ];
          idx = this.leftChildIdx(idx);
        } else {
          [this.#heap[i], this.#heap[right]] = [
            this.#heap[right],
            this.#heap[i],
          ];
          idx = this.rigthChildIdx(idx);
        }

        left = this.leftChildIdx(idx);
        right = this.rigthChildIdx(idx);

        // console.log(
        //   `${left} : ${this.#heap[left]}, ${right} : ${this.#heap[right]}`
        // );

        if (this.#heap[left] === undefined || this.#heap[right] === undefined) {
          break;
        }
      }
    } else {
      return null;
    }
    return smallest;
  }

  sort() {
    let result = [];
    let originalHeap = [...this.#heap];
    while (this.#heap.length > 1) {
      result.push(this.remove());
    }
    this.#heap = [...originalHeap];
    return result;
  }
}

const minHeap = new MinHeap();

minHeap.insert(10);
// minHeap.insert(12);
// minHeap.insert(2);
// minHeap.insert(1);
// minHeap.insert(5);

// console.log(minHeap.heapifyArr);

// console.log(minHeap.sort());

console.log(minHeap.remove());

// console.log(minHeap.heapifyArr);

// console.log(minHeap.sort());
