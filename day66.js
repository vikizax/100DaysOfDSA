/**
Tree Diameter (medium)#
Given a binary tree, find the length of its diameter. 
The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. 
The diameter of a tree may or may not pass through the root.
Note: You can always assume that there are at least two leaf nodes in the given tree.
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find_diameter(root) {
  let diameter = 0;

  function dfsCalculateDiameter(currentNode) {
    if (currentNode === null) return 0;

    const leftTreeLength = dfsCalculateDiameter(currentNode.left);
    const rightTreeLength = dfsCalculateDiameter(currentNode.right);

    if (leftTreeLength !== 0 && rightTreeLength !== 0) {
      const total = leftTreeLength + rightTreeLength + 1;
      diameter = Math.max(diameter, total);
    }

    return Math.max(leftTreeLength, rightTreeLength) + 1;
  }
  
  dfsCalculateDiameter(root);
  return diameter;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
console.log(`Tree Diameter: ${find_diameter(root)}`);
root.left.left = null;
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
root.right.left.right.left = new TreeNode(10);
root.right.right.left.left = new TreeNode(11);
console.log(`Tree Diameter: ${find_diameter(root)}`);
