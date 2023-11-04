/**
Problem Statement#
Given the head of a LinkedList and a number ‘k’, 
reverse every ‘k’ sized sub-list starting from the head.

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

function reverse_every_k_elements(head, k) {
  if (k <= 1 || head === null) return head;

  let current = head;
  let previous = null;

  while (true) {
    let last_node_of_previous_part = previous;
    let last_node_of_sub_list = current;
    let next = null;
    let i = 0;
    // reverse the k nodes
    while (current !== null && i < k) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i += 1;
    }
    // connect previous part
    if (last_node_of_previous_part !== null) {
      last_node_of_previous_part.next = previous;
    } else {
      head = previous;
    }

    // connect next part
    last_node_of_sub_list.next = current;

    if (current === null) break;

    previous = last_node_of_sub_list;
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
  `Nodes of reversed LinkedList are: ${reverse_every_k_elements(
    head,
    3
  ).get_list()}`
);
