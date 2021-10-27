class TreeNode {
       val: number
       left: TreeNode | null
       right: TreeNode | null
       constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
           this.val = (val===undefined ? 0 : val)
           this.left = (left===undefined ? null : left)
           this.right = (right===undefined ? null : right)
       }
   }
function levelOrder(root: TreeNode | null): number[] {

  if(!root) return [];
  let arr = [];
  let queue = [root];//用数组模拟queue
  while(queue.length) {
    let node = queue.shift();//弹出树顶结构
    arr.push(node.val);//将root放入
    node.left && queue.push(node.left);//如果有左节点则放入
    node.right && queue.push(node.right);//如果有右节点则放入
    //BFS 按层级广度遍历，直到queue遍历结束，将所有root进入队列
  }
  return arr;
};


