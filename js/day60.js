/**
Connect All Level Order Siblings (medium)#
Given a binary tree, connect each node with its level order successor. 
The last node of each level should point to the first node of the next level.
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // tree traversal using 'next' pointer
  print_tree() {
    let result = "Traversal using 'next' pointer: ";
    let current = this;
    while (current != null) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result);
  }
}

function connect_all_siblings(root) {
    const queue = [];
    queue.push(root);
    let prevNode = null;
    while(queue.length > 0) {
        const currentNode = queue.shift();
        if(prevNode!==null) {
            prevNode.next = currentNode
        }
        prevNode = currentNode;

        if(currentNode.left !== null) queue.push(currentNode.left);
        if(currentNode.right !== null) queue.push(currentNode.right);
    }
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root);
root.print_tree();
