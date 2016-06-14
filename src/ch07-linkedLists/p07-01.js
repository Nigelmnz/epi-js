/*
  Problem: Given two sorted linked lists, merge the two into one sorted linked list.
  Should run in O(n) time and use O(1) space.

  Solution: Using the original references, build a new list. Take the lesser head
  of the two lists and append it to your new list. Update the head, then repeat.
  Once one of the two lists is null, append the other to the new list.
*/

export default function mergeLists(A, B) {
  let sortedHead = null;
  let tail = null;
  let listA = A;
  let listB = B;

  const appendNode = function appendNode(n) {
    if (sortedHead) {
      tail.next = n;
    } else {
      sortedHead = n;
    }

    tail = n;
  };

  while (listA && listB) {
    if (listA.value < listB.value) {
      appendNode(listA);
      listA = listA.next;
    } else {
      appendNode(listB);
      listB = listB.next;
    }
  }

  if (listA) {
    appendNode(listA);
  }

  if (listB) {
    appendNode(listB);
  }

  return sortedHead;
}
