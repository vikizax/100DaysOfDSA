/**
 * Problem Statement#
 * Given the head of a Singly LinkedList, write a function to
 * determine if the LinkedList has a cycle in it or not
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
/**
 *
 * @param {{value: number, next: any}} head
 * @returns {boolean}
 */
function has_cycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`LinkedList has cycle: ${has_cycle(head)}`);

// Given the head of a LinkedList with a cycle, find the length of the cycle.
/**
 *
 * @param {{value: number, next: any}} head
 * @returns {boolean}
 */
function find_cycle_length(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return calculate_cycle_length(slow);
    }
  }

  return 0;
}
/**
 *
 * @param {{value: number, next: any}} slow
 * @returns {number}
 */
function calculate_cycle_length(slow) {
  let currentNode = slow;
  let length = 0;

  while (true) {
    currentNode = currentNode.next;
    length += 1;

    if (currentNode === slow) break;
  }

  return length;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);