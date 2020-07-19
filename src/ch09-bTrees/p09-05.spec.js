import * as Traverse from "./p09-05.js";
import BT from "../library/binaryTree.js";

describe("Traversal", () => {
    const tree = new BT(
        4,
        new BT(2, new BT(1), new BT(3)),
        new BT(6, new BT(5), new BT(7))
    );

    const treeTwo = new BT(
        3,
        new BT(1, null, new BT(2)),
        new BT(5, new BT(4), null)
    );

    const treeThree = new BT(
        4,
        new BT(1, null, new BT(3, new BT(2), null)),
        null
    );

    describe("handles a node", () => {
        describe("inorder", () => {
            it("can use recursion", () => {
                expect(Traverse.inorderRecur(new BT(4))).toEqual([4]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.inorderParent(new BT(4))).toEqual([4]);
            });
            it("can use stacks", () => {
                expect(Traverse.inorderStack(new BT(4))).toEqual([4]);
            });
            it("can use threading", () => {
                expect(Traverse.inorderThread(new BT(4))).toEqual([4]);
            });
        });
        describe("preorder", () => {
            it("can use recursion", () => {
                expect(Traverse.preorderRecur(new BT(4))).toEqual([4]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.preorderParent(new BT(4))).toEqual([4]);
            });
            it("can use stacks", () => {
                expect(Traverse.preorderStack(new BT(4))).toEqual([4]);
            });
        });
        describe("postorder", () => {
            it("can use recursion", () => {
                expect(Traverse.postorderRecur(new BT(4))).toEqual([4]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.postorderParent(new BT(4))).toEqual([4]);
            });
            it("can use stacks", () => {
                expect(Traverse.postorderStack(new BT(4))).toEqual([4]);
            });
        });
    });

    describe("handles a standard tree", () => {
        describe("inorder", () => {
            it("can use recursion", () => {
                expect(Traverse.inorderRecur(tree)).toEqual([
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                ]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.inorderParent(tree)).toEqual([
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                ]);
            });
            it("can use stacks", () => {
                expect(Traverse.inorderStack(tree)).toEqual([
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                ]);
            });
            it("can use threading", () => {
                expect(Traverse.inorderThread(tree)).toEqual([
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                ]);
            });
        });
        describe("preorder", () => {
            it("can use recursion", () => {
                expect(Traverse.preorderRecur(tree)).toEqual([
                    4,
                    2,
                    1,
                    3,
                    6,
                    5,
                    7,
                ]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.preorderParent(tree)).toEqual([
                    4,
                    2,
                    1,
                    3,
                    6,
                    5,
                    7,
                ]);
            });
            it("can use stacks", () => {
                expect(Traverse.preorderStack(tree)).toEqual([
                    4,
                    2,
                    1,
                    3,
                    6,
                    5,
                    7,
                ]);
            });
        });
        describe("postorder", () => {
            it("can use recursion", () => {
                expect(Traverse.postorderRecur(tree)).toEqual([
                    1,
                    3,
                    2,
                    5,
                    7,
                    6,
                    4,
                ]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.postorderParent(tree)).toEqual([
                    1,
                    3,
                    2,
                    5,
                    7,
                    6,
                    4,
                ]);
            });
            it("can use stacks", () => {
                expect(Traverse.postorderStack(tree)).toEqual([
                    1,
                    3,
                    2,
                    5,
                    7,
                    6,
                    4,
                ]);
            });
        });
    });

    describe("handles a nonstandard tree", () => {
        describe("inorder", () => {
            it("can use recursion", () => {
                expect(Traverse.inorderRecur(treeTwo)).toEqual([1, 2, 3, 4, 5]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.inorderParent(treeTwo)).toEqual([
                    1,
                    2,
                    3,
                    4,
                    5,
                ]);
            });
            it("can use stacks", () => {
                expect(Traverse.inorderStack(treeTwo)).toEqual([1, 2, 3, 4, 5]);
            });
            it("can use threading", () => {
                expect(Traverse.inorderThread(treeTwo)).toEqual([
                    1,
                    2,
                    3,
                    4,
                    5,
                ]);
            });
        });
        describe("preorder", () => {
            it("can use recursion", () => {
                expect(Traverse.preorderRecur(treeTwo)).toEqual([
                    3,
                    1,
                    2,
                    5,
                    4,
                ]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.preorderParent(treeTwo)).toEqual([
                    3,
                    1,
                    2,
                    5,
                    4,
                ]);
            });
            it("can use stacks", () => {
                expect(Traverse.preorderStack(treeTwo)).toEqual([
                    3,
                    1,
                    2,
                    5,
                    4,
                ]);
            });
        });
        describe("postorder", () => {
            it("can use recursion", () => {
                expect(Traverse.postorderRecur(treeTwo)).toEqual([
                    2,
                    1,
                    4,
                    5,
                    3,
                ]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.postorderParent(treeTwo)).toEqual([
                    2,
                    1,
                    4,
                    5,
                    3,
                ]);
            });
            it("can use stacks", () => {
                expect(Traverse.postorderStack(treeTwo)).toEqual([
                    2,
                    1,
                    4,
                    5,
                    3,
                ]);
            });
        });
    });

    describe("handles a snaking tree", () => {
        describe("inorder", () => {
            it("can use recursion", () => {
                expect(Traverse.inorderRecur(treeThree)).toEqual([1, 2, 3, 4]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.inorderParent(treeThree)).toEqual([1, 2, 3, 4]);
            });
            it("can use stacks", () => {
                expect(Traverse.inorderStack(treeThree)).toEqual([1, 2, 3, 4]);
            });
            it("can use threading", () => {
                expect(Traverse.inorderThread(treeThree)).toEqual([1, 2, 3, 4]);
            });
        });
        describe("preorder", () => {
            it("can use recursion", () => {
                expect(Traverse.preorderRecur(treeThree)).toEqual([4, 1, 3, 2]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.preorderParent(treeThree)).toEqual([
                    4,
                    1,
                    3,
                    2,
                ]);
            });
            it("can use stacks", () => {
                expect(Traverse.preorderStack(treeThree)).toEqual([4, 1, 3, 2]);
            });
        });
        describe("postorder", () => {
            it("can use recursion", () => {
                expect(Traverse.postorderRecur(treeThree)).toEqual([
                    2,
                    3,
                    1,
                    4,
                ]);
            });
            it("can use parent pointers", () => {
                expect(Traverse.postorderParent(treeThree)).toEqual([
                    2,
                    3,
                    1,
                    4,
                ]);
            });
            it("can use stacks", () => {
                expect(Traverse.postorderStack(treeThree)).toEqual([
                    2,
                    3,
                    1,
                    4,
                ]);
            });
        });
    });
});
