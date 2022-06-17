/**
 * Any number will be called a happy number if, after repeatedly replacing it
 * with a number equal to the sum of the square of all of its digits,
 * leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’.
 * Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
 */
/**
 *
 * @param {number} num
 * @returns {boolean}
 */
function find_happy_number(num) {
  let slow = num;
  let fast = num;
  while (true) {
    slow = num_square(slow);
    fast = num_square(num_square(fast));
    if (slow === fast) {
      break;
    }
  }
  return slow === 1;
}

/**
 * @param {number} num
 * @returns {number}
 */
function num_square(num) {
  let sum = 0;
  while (num > 0) {
    const currentDigit = num % 10;
    sum += currentDigit * currentDigit;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(find_happy_number(23), "== true");
console.log(find_happy_number(12), "== false");

/**
 * Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
 * If the total number of nodes in the LinkedList is even, return the second middle node.
 */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_middle_of_linked_list = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);

head.next.next.next.next.next.next = new Node(7);
console.log(`Middle Node: ${find_middle_of_linked_list(head).value}`);
