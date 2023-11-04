/**
Problem Statement#
Find the minimum depth and maximum depth of a binary tree. The minimum depth is the number of nodes 
along the shortest path from the root node to the nearest leaf node.
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function find_minimum_depth(root) {
  if (root === null || root === undefined) return 0;
  const queue = [];
  queue.push(root);
  let treeDepth = 0;
  while (queue.length > 0) {
    const levelSize = queue.length;
    treeDepth += 1;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (currentNode.left === null && currentNode.right === null)
        return treeDepth;

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
  return treeDepth;
}

function find_maximum_depth(root) {
  if (root === null || root === undefined) return 0;
  const queue = [];
  let depth = 0;
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    depth += 1;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
  return depth;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
