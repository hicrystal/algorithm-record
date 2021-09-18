class CQueue {
  listIn: Array<number>;
  listOut: Array<number>;
  constructor() {
    this.listIn = [];
    this.listOut = [];
  }

  appendTail(value: number): void {
   this.listIn.push(value);
  }

  deleteHead(): number {
    if(this.listOut.length < 1) {
      while (this.listIn.length){
        this.listOut.push(this.listIn.pop())
      }
    

    }
    return this.listOut.pop() ?? -1;
  }
}

/*
题
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
第一行代表行为，第二行代表传入的参数
解：


 */