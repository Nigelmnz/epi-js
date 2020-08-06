import { Node } from "./node";

describe("Node", () => {
    it("can be created", () => {
        expect(new Node(4)).toBeDefined();
    });

    it("can have a value", () => {
        expect(new Node(7).value).toEqual(7);
    });

    it("can have a next", () => {
        const head = new Node(3);
        head.next = new Node(7);
        expect(head.next.value).toEqual(7);
    });

    it("can list elements", () => {
        const head = new Node(3);
        head.next = new Node(7);
        expect(head.toArray()).toEqual([3, 7]);
    });
});
