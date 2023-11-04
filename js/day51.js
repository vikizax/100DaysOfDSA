/**
Reverse alternating K-element Sub-list (medium)#
Given the head of a LinkedList and a number ‘k’, 
reverse every alternating ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
 */

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
}

function reverse_alternate_k_elements(head, k) {
  if (k <= 1 || head === null) return head;

  let current = head;
  let prev = null;

  while (current !== null) {
    let prev_list_last_node = prev;
    let sub_list_last_node = current;
    let iter = 0;
    let next = null;
    // reverse k node
    while (current !== null && iter < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      iter += 1;
    }

    if (prev_list_last_node !== null) {
      prev_list_last_node.next = prev;
    } else {
      head = prev;
    }

    sub_list_last_node.next = current;

    iter = 0;
    // skip k node
    while (current !== null && iter < k) {
      prev = current;
      current = current.next;
      iter += 1;
    }
  }

  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(
    head,
    2
  ).get_list()}`
);
