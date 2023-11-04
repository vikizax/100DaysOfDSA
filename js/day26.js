// Given the head of a Singly LinkedList that contains a cycle,
// write a function to find the starting node of the cycle.
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
/**
 *
 * @param {{value: number, next: any}} head
 */
function find_cycle_start(head) {
  let slow = head;
  let fast = head;
  let cycle_length = 0;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    // find the loop
    if (slow === fast) {
      // find the length
      cycle_length = find_cycle_length(slow);
      break;
    }
  }
  // get the start
  slow = head;
  fast = head;
  let nodeIndex = 0;
  while (cycle_length > 0) {
    fast = fast.next;
    cycle_length -= 1;
  }

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
    nodeIndex += 1;
  }

  //   return slow;
  return nodeIndex;
}
/**
 * @param {{value: number, next: any}} slow
 * @returns {number}
 */
function find_cycle_length(slow) {
  let currentNode = slow;
  let length = 0;
  while (true) {
    currentNode = currentNode.next;
    length += 1;
    if (currentNode === slow) break;
  }
  return length;
}

// head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);

// head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

// head.next.next.next.next.next.next = head;
// console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

// find start of cycle in linked list LEETCODE VERSION
function find_cycle_start_leetcode(head) {
  let slow = head;
  let fast = head;
  let found = null;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      found = slow;
      break;
    }
  }

  if (!found) return found;

  slow = head;

  while (slow !== found) {
    slow = slow.next;
    found = found.next;
  }

  return slow;
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start_leetcode(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start_leetcode(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start_leetcode(head).value}`);
