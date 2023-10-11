/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let list = new ListNode();
  let head = list;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      list.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      list.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    list = list.next;
  }

  if (list1 !== null) list.next = list1;

  if (list2 !== null) list.next = list2;

  return head.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
