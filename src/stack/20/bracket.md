思路理解

```
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    let stack = [];
    let keyPair = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    let sa = s.split('');
    for (let index = 0; index < sa.length; index++) {
        const value = sa[index];
        if (keyPair.has(value)) {
            if (stack.length === 0 || stack[stack.length - 1] !== keyPair.get(value)) {
                return false;
            }
            stack.pop();
            //右边的
        } else {
            stack.push(value);
        }
    }
    return stack.length===0;

};

```
用栈和Map数据结构来作为解体的思路，
1.首先对于奇数长度的string，可以排除在外,因此可以通过跟2取膜的值来判断是否优先返回。
2.设置map的的结构为"}""{"来构建键值对
3.遍历s，如果为左括号`{ [ (` 则压栈进入`stack.push()`;
4.如果为右边括号，则将栈顶和当前右括号对应在map中的值进行比较，如果不相等，则返回错误，如果相等，则将栈顶元素弹出`stack.pop()`。
5.遍历整个string每个值，直到返回错误或遍历完成
6.判断stack长度最终是否为空。

**注意：
 在第一次解题中，我错误的用`foreach`的方法来遍历s，得到的值始终为true，这是由于forEach中返回false，只跳出当前的循环，下一次循环并不受影响，因此需要用for循环**

 [原题链接](https://leetcode-cn.com/problems/valid-parentheses/)