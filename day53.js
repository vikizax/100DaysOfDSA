/**Problem Statement#
Given a binary tree, populate an array to represent its level-by-level traversal. 
You should populate the values of all nodes of each level from left to right in separate sub-arrays.
*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function bfs(root) {
  if (root === null) return [];
  const result = [];
  const queue = [];

  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevelNodes = [];
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      currentLevelNodes.push(currentNode.val);
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(currentLevelNodes);
  }

  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${bfs(root)}`);
