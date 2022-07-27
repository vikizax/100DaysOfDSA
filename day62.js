/**
Problem Statement#
Given a binary tree and a number ‘S’, 
find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
 */

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function has_path(root, sum) {
  if (root === null) return false;

  if (root.value === sum && root.left === null && root.right === null)
    return true;

  return (
    has_path(root.left, sum - root.value) ||
    has_path(root.right, sum - root.value)
  );
}

/**
Given a binary tree and a number ‘S’, 
find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
 */
function getAllPaths(root, sum) {
  const allPaths = [];
  recursiveFindPaths(root, sum, [], allPaths);
  return allPaths;
}

function recursiveFindPaths(currentNode, sum, currentPathway, allPaths) {
  if (currentNode === null) return;
  currentPathway.push(currentNode.value);
  if (
    currentNode.value === sum &&
    currentNode.left === null &&
    currentNode.right === null
  ) {
    allPaths.push(Array.from(currentPathway));
  } else {
    recursiveFindPaths(
      currentNode.left,
      sum - currentNode.value,
      currentPathway,
      allPaths
    );
    recursiveFindPaths(
      currentNode.right,
      sum - currentNode.value,
      currentPathway,
      allPaths
    );
  }
  currentPathway.pop();
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);

root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23,
  result = getAllPaths(root, sum);

console.log(`Tree paths with sum ${sum}: `);
for (let i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}
