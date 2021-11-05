// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

function levelOrder3(root): number[][] {
  if(!root) return [];
  let arr = [];// 最后打印出来的结果
  const queue = [root];// js没有list的原生表示方法，用数组代替
  while(queue.length) {
    let floor = [];//每一层的打印结果
    for(let i = queue.length; i>0; i--) {
      const node = queue.shift();// 打印顶树
      // 奇数层打印正序，偶数层打印倒序 第一层是正序，此时arr还没进去 所以需要+1
      (arr.length+1) % 2 === 0 ? floor.unshift(node.val):floor.push(node.val)
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    arr.push(floor);
  }
  return arr;
};
console.log(levelOrder3([3,9,20,null,null,15,7]))

/**
 * 这个题里面 我在while算法 每一层的里面本来设置了一个层数的点，由于j本身在每一次循环结束之后都会重新被分配，所以并没有起到作用，所以放在外面就好了
 */
