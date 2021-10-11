class MinStack {
  stackA: Array<number>;
  stackB: Array<number>;
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  push(x: number): void {
    this.stackA.unshift(x);
    if(this.stackB.length===0 || this.stackB[0] >= x) {
      this.stackB.unshift(x);
    }

  }

  pop(): void {
    if(this.stackA[0] === this.stackB[0]) this.stackB.shift();
    this.stackA.shift();

    
  }

  top(): number {
    return this.stackA[0];
    
  }

  min(): number {
    return this.stackB[0];

  }
}
let min = new MinStack();
min.push(0);
min.push(1);
min.push(0);
min.pop();
console.log(min.min());
// 辅助栈思路，利用最小栈，同时保持跟栈顶保持一致


