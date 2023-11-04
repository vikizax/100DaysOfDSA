/**
Problem Statement#
Given a binary tree, populate an array to represent the averages of all of its levels.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function find_level_averages(root) {
  if (root == null || root == undefined) return [];
  const result = [];
  const queue = [];

  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    let totalSum = 0;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      totalSum += currentNode.value;

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(totalSum / levelSize);
  }

  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);
