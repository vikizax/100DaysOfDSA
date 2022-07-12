/**Problem Statement#
Given the head of a LinkedList and two positions ‘p’ and ‘q’, 
reverse the LinkedList from position ‘p’ to ‘q’.
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

function reverse_sub_list(head, p, q) {
  if (p === q) return head;
  let pNode = null;
  let qNode = null;
  let headIterNode = head;
  let iter = 1;

  while (headIterNode !== null) {
    if (iter === p) pNode = headIterNode;
    if (iter === q) {
      qNode = headIterNode;
      break;
    }
    headIterNode = headIterNode.next;
    iter += 1;
  }

  if (qNode === null) return head;

  let prev = qNode.next;
  headIterNode = pNode;
  console.log(prev);
  iter = p;
  while (iter <= q) {
    const next = headIterNode.next;
    headIterNode.next = prev;
    prev = headIterNode;
    headIterNode = next;
    iter += 1;
  }
  head.next = prev;
  return head;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(
  `Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 5).get_list()}`
);
