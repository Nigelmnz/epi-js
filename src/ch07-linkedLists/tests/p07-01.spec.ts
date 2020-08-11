import func from "../p07-01";
import LinkedListNode from "../../library/linkedList";

describe("Linked List Merge", () => {
    it("handles two one element lists", () => {
        expect(
            func(new LinkedListNode([7]), new LinkedListNode([4])).toArray()
        ).toEqual([4, 7]);
    });
    it("handles two multi-element lists", () => {
        expect(
            func(
                new LinkedListNode([2, 5, 7]),
                new LinkedListNode([3, 11])
            ).toArray()
        ).toEqual([2, 3, 5, 7, 11]);
    });
    it("handles two multi-element lists with dupes", () => {
        expect(
            func(
                new LinkedListNode([2, 5, 5, 5, 6, 7]),
                new LinkedListNode([3, 5, 7, 11])
            ).toArray()
        ).toEqual([2, 3, 5, 5, 5, 5, 6, 7, 7, 11]);
    });
});
