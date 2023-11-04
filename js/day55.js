/**
Problem Statement#
Given a binary tree, populate an array to represent its zigzag level order traversal. 
You should populate the values of all nodes of the first level from left to right, 
then right to left for the next level and keep alternating in the same manner for the following levels.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function zigZagTraverse(root) {
  if (root === null || root === undefined) return [];
  const result = [];
  const queue = [];
  queue.push(root);
  let leftToRight = true;
  while (queue.length > 0) {
    const levelSize = queue.length;
    const levelNodeValues = [];
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (leftToRight) {
        levelNodeValues.push(currentNode.value);
      } else {
        levelNodeValues.unshift(currentNode.value);
      }
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(levelNodeValues);
    leftToRight = !leftToRight;
  }

  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${zigZagTraverse(root)}`);
