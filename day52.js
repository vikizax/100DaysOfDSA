/**
Rotate a LinkedList (medium)#
Given the head of a Singly LinkedList and a number ‘k’, 
rotate the LinkedList to the right by ‘k’ nodes.
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

function rotate(head, rotations) {
  if (head == null || head.next === null || rotations <= 0) return head;

  let lastNode = head;
  let listLength = 1;
  while (lastNode.next !== null) {
    lastNode = lastNode.next;
    listLength += 1;
  }

  lastNode.next = head;
  rotations %= listLength;
  let skipLength = listLength - rotations;
  let lastNodeOfRotatedList = head;
  for(let i =0; i < skipLength - 1; i++) {
    lastNodeOfRotatedList = lastNodeOfRotatedList.next;
  }

  head= lastNodeOfRotatedList.next;
  lastNodeOfRotatedList.next = null;
  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 3).get_list()}`);
