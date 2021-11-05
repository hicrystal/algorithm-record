//从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
function levelOrder1(root): number[] {
  if(!root) return [];
  let arr = [];
  let queue = [root];//用数组模拟queue
  while(queue.length) {
    let floor = [];
    // 每层循环一次
    for(let i=queue.length;i> 0;i--) {
      let node = queue.shift();//弹出树顶结构
      floor.push(node.val);//将root放入
      node.left && queue.push(node.left);//如果有左节点则放入
      node.right && queue.push(node.right);//如果有右节点则放入
      //BFS 按层级广度遍历，直到queue遍历结束，将所有root进入队列
    }
    arr.push(floor);
  }
  return arr;
};
// 难点 怎么区分层级
console.log(levelOrder1([3,9,20,null,null,15,7]))