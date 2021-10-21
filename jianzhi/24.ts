//定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 迭代 双指针，储存

 function reverseList(head: ListNode | null): ListNode | null {
   let prev = null;
   let curr = head;
   while(curr) {
     // 局部翻转
     prev = curr.next;
     curr= head.next;
   }
   return prev;
};
// 思路遇到的盲点： 不知道怎么返回一个list，js中并没有这样的数据结构
// 虽然没有直接的数据结构，但可以用这个东西表示

