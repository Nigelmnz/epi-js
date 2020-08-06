import LinkedListNode from "./linkedList";

describe("Linked List", () => {
    let list: LinkedListNode<number>;

    beforeEach(() => {
        list = new LinkedListNode<number>();
    });

    it("can be created", () => {
        expect(list).toBeDefined();
    });

    it("can accept a value", () => {
        expect(new LinkedListNode(6).toArray()).toEqual([6]);
    });

    it("can accept arrays", () => {
        expect(new LinkedListNode([1, 2, 3]).toArray()).toEqual([1, 2, 3]);
    });

    it("has a tail", () => {
        expect(new LinkedListNode([1, 2, 3]).tail.value).toEqual(3);
    });

    it("has a correct tail at any node", () => {
        expect(
            (new LinkedListNode([1, 2, 3]).next as LinkedListNode<number>).tail
                .value
        ).toEqual(3);
    });

    it("can append", () => {
        const listA = new LinkedListNode([1, 2, 3]);
        const listB = new LinkedListNode([4, 5, 6]);
        expect(listA.append(listB).toArray()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("has a correct tail after appending and adding", () => {
        const listA = new LinkedListNode([1, 2, 3]);
        const listB = new LinkedListNode([4, 5, 6]);
        listA.append(listB);
        listA.add(7);
        expect(listA.tail.value).toEqual(7);
        expect(listB.tail.value).toEqual(7);
        expect((listB.next as LinkedListNode<number>).tail.value).toEqual(7);
    });

    it("can add elements", () => {
        expect(list.add(5).toArray()).toEqual([5]);
    });

    it("can get a nodes at an index", () => {
        const node = list.add(5).add(8).atIndex(1) as LinkedListNode<number>;
        expect(node.value).toEqual(8);
    });

    it("can insert elements", () => {
        const listA = new LinkedListNode([3, 6, 9]);
        listA.appendAfter(
            listA.atIndex(1) as LinkedListNode<number>,
            new LinkedListNode(10)
        );
        expect(listA.toArray()).toEqual([3, 6, 10, 9]);
        expect((listA.atIndex(2) as LinkedListNode<number>).tail).toEqual(
            listA.tail
        );
    });

    it("can remove elements", () => {
        const listA = new LinkedListNode([3, 6, 9, 12]);
        listA.deleteAfter(listA.atIndex(0) as LinkedListNode<number>);
        expect(listA.toArray()).toEqual([3, 9, 12]);
    });

    it("can remove tails", () => {
        const listA = new LinkedListNode([3, 6, 9, 12]);
        listA.deleteAfter(listA.atIndex(2) as LinkedListNode<number>);
        expect(listA.tail.value).toEqual(9);
    });
});
