/**
Rearrange a LinkedList (medium)#
Given the head of a Singly LinkedList, 
write a method to modify the LinkedList such that the nodes from 
the second half of the LinkedList are inserted alternately to the nodes 
from the first half in reverse order. 
So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, 
your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

Example 1:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 
Example 2:

Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null
 */
class LinkedList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}
/**
 *
 * @param {LinkedList} head
 * @returns {LinkedList}
 */
function reorder(head) {
  let slow = head;
  let fast = head;

  // slow -> middle of the linkedlist
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reverseHead = reverseLinkedList(slow);
  let originalHead = head;

  while (reverseHead !== null && reverseHead.next !== null) {
    let hNext = head.next;
    let rNext = reverseHead.next;
    head.next = reverseHead;
    reverseHead.next = hNext;
    head = hNext;
    reverseHead = rNext;
  }
  return originalHead;
}

/**
 *
 * @param {LinkedList} head
 * @returns {LinkedList}
 */
function reverseLinkedList(head) {
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

head = new LinkedList(2);
head.next = new LinkedList(4);
head.next.next = new LinkedList(6);
head.next.next.next = new LinkedList(8);
head.next.next.next.next = new LinkedList(10);
head.next.next.next.next.next = new LinkedList(12);
reorder(head);
head.print_list();
