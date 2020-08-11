import LinkedListNode from "../library/linkedList";
/*
  Problem: Given a linked list, test for cycles. If there exists one,
  return the first node of the cycles.

  Solution: First, confirm the existence of a cycle by moving two pointers
  through the list at different speeds. Then, find the cycle length, N.
  Finally, move two pointers simultaneously, one starting at the list head, and
  one starting N nodes forward. The node where they collide is the first node
  of the cycle.
*/

export default function cycleTest<T>(
    listA: LinkedListNode<T>
): LinkedListNode<T> | null {
    let slowPtr: LinkedListNode<T> | null = listA,
        fastPtr: LinkedListNode<T> | null = listA;

    const nodeDistance = (
        start: LinkedListNode<T> | null,
        target: LinkedListNode<T> | null
    ) => {
        let cur: LinkedListNode<T> | null = start;
        let i = 1;
        while (cur && cur !== target) {
            cur = cur.next;
            i++;
        }
        return i;
    };

    while (slowPtr && fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;

        if (slowPtr === fastPtr) {
            const cycleSize = nodeDistance(
                (slowPtr as LinkedListNode<T>).next,
                slowPtr
            );
            let cycleStart: LinkedListNode<T> = listA;
            for (let i = 0; i < cycleSize; i++) {
                cycleStart = cycleStart.next as LinkedListNode<T>;
            }

            let cur: LinkedListNode<T> = listA;
            while (cur !== cycleStart) {
                cur = cur.next as LinkedListNode<T>;
                cycleStart = cycleStart.next as LinkedListNode<T>;
            }

            return cycleStart;
        }
    }

    return null;
}
