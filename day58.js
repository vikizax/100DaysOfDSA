/**
Problem Statement#
Given a binary tree and a node, find the level order successor of the given node in the tree. 
The level order successor is the node that appears right after the given node in the 
level order traversal.
 */
class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

const find_successor = function (root, key) {
  const queue = [];
  let successor = null;
  queue.push(root);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);

    if (key === currentNode.value) {
      break;
    }
  }

  if(queue.length > 0) {
    successor = queue[0];
  }

  return successor;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

let result = find_successor(root, 3);
if (result) {
  console.log(result.value);
}

root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

result = find_successor(root, 9);
if (result) {
  console.log(result.value);
}

result = find_successor(root, 12);
if (result) {
  console.log(result.value);
}
