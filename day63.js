/**
Problem Statement#
Given a binary tree where each node can only have a digit (0-9) value, 
each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
 */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function find_sum_of_path_numbers(root) {
  return pathSum(root, 0);
}

function pathSum(currentNode, currentSum) {
  if (currentNode === null) return 0;
  currentSum = 10 * currentSum + currentNode.value;
  if (currentNode.left == null && currentNode.right === null) return currentSum;

  return (
    pathSum(currentNode.left, currentSum) +
    pathSum(currentNode.right, currentSum)
  );
}

/**
 Given a binary tree and a number sequence, 
 find if the sequence is present as a root-to-leaf path in the given tree.
 */
function find_path(root, sequence) {
  if (root === null) {
    return sequence.length === 0;
  }
  return dfsCheck(root, sequence, 0);
}

function dfsCheck(currentNode, sequence, seqIdx) {
  if (currentNode === null) return false;

  const seqLength = sequence.length;
  if (seqIdx >= seqLength || sequence[seqIdx] !== currentNode.value)
    return false;

  if (
    currentNode.left === null &&
    currentNode.right === null &&
    seqIdx === seqLength - 1
  )
    return true;

  return (
    dfsCheck(currentNode.left, sequence, seqIdx + 1) ||
    dfsCheck(currentNode.right, sequence, seqIdx + 1)
  );
}

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);
