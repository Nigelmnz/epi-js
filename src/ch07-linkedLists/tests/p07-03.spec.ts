import func from "../p07-03";
import LinkedListNode from "../../library/linkedList";

describe("Linked List Merge", () => {
    it("handles no cycles", () => {
        expect(func(new LinkedListNode([1, 2, 3, 4, 5, 6]))).toEqual(null);
    });
    it("handles a cycle", () => {
        const pathA = new LinkedListNode([1, 2, 3, 4, 5, 6, 7, 8]);
        pathA.tail.next = pathA.atIndex(2);

        expect(func(pathA)).toEqual(pathA.atIndex(2));
    });
});
