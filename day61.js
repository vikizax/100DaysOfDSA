/**
Right View of a Binary Tree (easy)#
Given a binary tree, return an array containing nodes in its right view. 
The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function tree_right_view(root) {
  if (root === null || root === undefined) return [];
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (i + 1 === levelSize) result.push(currentNode.value);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
  return result;
}

/**
Left View of a Binary Tree (easy)#
Given a binary tree, return an array containing nodes in its left view. 
The left view of a binary tree is the set of nodes visible when the tree is seen from the left side.
 */
function tree_left_view(root) {
  if (root === null || root === undefined) return [];
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (i === 0) result.push(currentNode.value);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log("Tree right view: " + tree_right_view(root));
console.log("Tree left view: " + tree_left_view(root));
