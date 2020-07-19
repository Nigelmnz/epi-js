import LinkedList from "./linkedList.js";

describe("Linked List", () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    it("can be created", () => {
        expect(list).toBeDefined();
    });

    it("can accept a value", () => {
        expect(new LinkedList(6).toArray()).toEqual([6]);
    });

    it("can accept arrays", () => {
        expect(new LinkedList([1, 2, 3]).toArray()).toEqual([1, 2, 3]);
    });

    it("can add elements", () => {
        expect(list.add(5).toArray()).toEqual([5]);
    });

    it("can remove elements", () => {
        expect(list.add(3).add(6).add(9).remove(1).toArray()).toEqual([3, 9]);
    });

    it("can get head", () => {
        expect(list.add(5).head.value).toEqual(5);
    });

    it("nodes can get next", () => {
        expect(list.add(5).add(8).head.next.value).toEqual(8);
    });
});
