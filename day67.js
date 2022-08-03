/** 
Path with Maximum Sum (hard)#
Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.

A path can be defined as a sequence of nodes between any two nodes and 
doesn’t necessarily pass through the root. The path must contain at least one node.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function find_maximum_path_sum(root) {
  let maxPathSum = Number.MIN_SAFE_INTEGER;
  function dfsCalculateMaximumPathSum(currentNode) {
    if (currentNode === null) return 0;

    let leftPathSum = dfsCalculateMaximumPathSum(currentNode.left);
    let rightPathSum = dfsCalculateMaximumPathSum(currentNode.right);

    leftPathSum = Math.max(leftPathSum, 0);
    rightPathSum = Math.max(rightPathSum, 0);

    let localMaxSum = leftPathSum + rightPathSum + currentNode.value;
    maxPathSum = Math.max(localMaxSum, maxPathSum);

    return Math.max(leftPathSum, rightPathSum) + currentNode.value;
  }
  dfsCalculateMaximumPathSum(root);
  return maxPathSum;
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root = new TreeNode(-1);
root.left = new TreeNode(-3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);
