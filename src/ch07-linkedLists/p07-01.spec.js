import func from "./p07-01.js";
import Node from "../library/node.js";

describe("Linked List Merge", () => {
    it("handles two null lists", () => {
        expect(func(new Node(), new Node()).toArray()).toEqual([null, null]);
    });

    it("handles two one element lists", () => {
        expect(func(new Node(7), new Node(4)).toArray()).toEqual([4, 7]);
    });

    it("handles two multi-element lists", () => {
        expect(func(new Node([2, 5, 7]), new Node([3, 11])).toArray()).toEqual([
            2,
            3,
            5,
            7,
            11,
        ]);
    });
});
