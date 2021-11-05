function mirrorTree(root: TreeNode | null): TreeNode | null {
  if(!root) return null;
  const right =  mirrorTree(root.right);
  const left = mirrorTree(root.left);
  root.left = right
  root.right = left;
  return root; 
};