function isNode(A: TreeNode | null, B: TreeNode | null): boolean {
  if(B===null) return true;
  if(A===null ||   B.val !== A.val ) return false;
  return isNode(A.left,B.left) && isNode(A.right,B.right);
}
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if(A===null || B===null ) return false;
  return isNode(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

