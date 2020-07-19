import Node from "./node.js";

describe("Node", () => {
    let node;

    beforeEach(() => {
        node = new Node();
    });

    it("can be created", () => {
        expect(node).toBeDefined();
    });

    it("can accept a value", () => {
        expect(new Node(6).toArray()).toEqual([6]);
    });

    it("can accept arrays", () => {
        expect(new Node([1, 2, 3]).toArray()).toEqual([1, 2, 3]);
    });
});
