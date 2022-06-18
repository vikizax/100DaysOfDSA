/**
 * Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
 * Your algorithm should use constant space and the input LinkedList should be in the original
 * form once the algorithm is finished. The algorithm should have O(N)
 * time complexity where ‘N’ is the number of nodes in the LinkedList.
 */

class LinkedList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function is_palindromic_linked_list(head) {
  let slow = head;
  let fast = head;

  // slow = will the middle of the linkedlist
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the linkedlist from the middle
  const reverse_head = reverse_linked_list(slow);
  let temp_reverse_head = reverse_head;
  // compare the linkedlist value to check for palindrom
  let compareNode = head;
  while (compareNode !== null && temp_reverse_head !== null) {
    if (compareNode.value !== temp_reverse_head.value) break;
    compareNode = compareNode.next;
    temp_reverse_head = temp_reverse_head.next;
  }
  // revert the linkedlist
  reverse_linked_list(reverse_head);
  if (compareNode === null || temp_reverse_head === null) return true;
  return false;
}

/**
 *
 * @param {LinkedList} head
 * @returns {LinkedList}
 */
function reverse_linked_list(head) {
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// head = new LinkedList(1);
// head.next = new LinkedList(2);
// head.next.next = new LinkedList(2);
// head.next.next.next = new LinkedList(1);
head = new LinkedList(2);
head.next = new LinkedList(4);
head.next.next = new LinkedList(6);
head.next.next.next = new LinkedList(4);
head.next.next.next.next = new LinkedList(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
head.next.next.next.next.next = new LinkedList(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
