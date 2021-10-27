// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

function levelOrder3(root): number[][] {
  if(!root) return [];
  let arr = [];
  const queue = [root];
  while(queue.length) {
    let floor = [];
    let iSreverse = 1;
    for(let i = queue.length; i>0; i--) {
      const node = queue.shift();
      iSreverse % 2 === 0 ? floor.unshift(node.val):floor.push(node.val)
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    iSreverse++;
    arr.push(floor);
  }
  return arr;
};
console.log(levelOrder3([3,9,20,null,null,15,7]))
