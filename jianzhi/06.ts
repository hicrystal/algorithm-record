// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]


/**
 * Definition for singly-linked list.
 
 */

 class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}
// 解法1: 辅助栈
 function reversePrint(head: ListNode | null) {
   const reverseArr = []
   while(head.next){
     reverseArr.unshift(head.val);
     head = head.next;     
   }
   return reverseArr

};
//解法2: 递归

function reversePrintArr(head: ListNode | null) {

  return !head ? [] : reversePrintArr(head.next).concat(head.val)

};

