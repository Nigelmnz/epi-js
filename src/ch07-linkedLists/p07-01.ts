import LinkedListNode from "../library/linkedList";
/*
  Problem: Given two sorted linked lists, merge them into one
  sorted linked list.

  Solution: Keep pointers on both lists, grab elements one by one according
  to size, move pointers forward. Linear time.
*/

export default function mergeSortedLists<T>(
    listA: LinkedListNode<T>,
    listB: LinkedListNode<T>
): LinkedListNode<T> {
    let aPtr: LinkedListNode<T> | null = listA,
        bPtr: LinkedListNode<T> | null = listB;
    const result: LinkedListNode<T> = new LinkedListNode();

    while (aPtr && bPtr && aPtr.value !== null && bPtr.value !== null) {
        let value: T;
        if (aPtr.value <= bPtr.value) {
            value = aPtr.value;
            aPtr = aPtr.next;
        } else {
            value = bPtr.value;
            bPtr = bPtr.next;
        }

        result.add(value);
    }

    if (aPtr || bPtr) {
        return result.append((aPtr || bPtr) as LinkedListNode<T>);
    }
    return result;
}
