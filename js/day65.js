/**
Problem Statement#
Given a binary tree and a number ‘S’, 
find all paths in the tree such that the sum of all the node values of each path equals ‘S’. 
Please note that the paths can start or end at any node but all paths must follow direction 
from parent to child (top to bottom).
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function count_paths(root, S) {
  return dfsCountPath(root, S, []);
}

function dfsCountPath(currentNode, target, paths) {
  if (currentNode === null || currentNode === undefined) return 0;

  paths.push(currentNode);

  let currentTotal = 0;
  let pathCount = 0;

  for (let i = paths.length - 1; i >= 0; i--) {
    currentTotal += paths[i].value;
    if (currentTotal === target) {
      pathCount += 1;
    }
  }

  pathCount += dfsCountPath(currentNode.left, target, paths);
  pathCount += dfsCountPath(currentNode.right, target, paths);

  paths.pop();
  return pathCount;
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
