import * as BST from "./BST.js";

describe("BSTs", () => {
    const runTests = function runTests(T, balanced = false) {
        let tree;

        it("can be made", () => {
            tree = new T(10);
            expect(tree.inorder()).toEqual([10]);
        });

        it("can insert an element", () => {
            tree = new T(10);
            tree.insert(5);
            expect(tree.inorder()).toEqual([5, 10]);
        });

        it("can retain parents", () => {
            tree = new T(10);
            const lastNode = tree.insert(5);
            expect(lastNode.parent.data).toEqual(10);
        });

        it("can insert many elements", () => {
            tree = new T(10);
            tree.insert([2, 5, 3, 4, 1]);
            expect(tree.inorder()).toEqual([1, 2, 3, 4, 5, 10]);
        });

        it("can contains", () => {
            tree = new T(10);
            tree.insert([4, 7, 2, 6, 8, 22, 44, 33, 1]);
            expect(tree.contains(44)).toBe(true);
            expect(tree.contains(20)).toBe(false);
        });

        it("can find", () => {
            tree = new T(10);
            tree.insert([4, 7, 2, 6, 8, 22, 44, 33, 1]);
            expect(tree.find(33).data).toEqual(33);
            expect(tree.find(20)).toEqual(null);
            expect(tree.findParent(22).data).toEqual(10);
        });

        it("can delete", () => {
            tree = new T(10);
            tree.insert([4, 7, 2, 6, 8, 22, 44, 33, 1]);
            tree.delete(22);
            tree.delete(11);
            expect(tree.inorder()).toEqual([1, 2, 4, 6, 7, 8, 10, 33, 44]);
            tree.delete(1);
            expect(tree.inorder()).toEqual([2, 4, 6, 7, 8, 10, 33, 44]);
        });

        if (balanced) {
            it("maintains balance", () => {
                tree = new T(10);
                tree.insert([
                    5,
                    15,
                    20,
                    25,
                    30,
                    40,
                    50,
                    1,
                    3,
                    6,
                    123,
                    86,
                    23,
                    505,
                    2345123,
                ]);
                tree.delete(22);
                expect(tree.isFairlyBalanced()).toBe(true);
                tree.delete(1);
                tree.delete(4);
                expect(tree.isFairlyBalanced()).toBe(true);
                tree.insert([100, 200, 300, 400, 500]);
                expect(tree.isFairlyBalanced()).toBe(true);
            });
        }
    };

    describe("Non-balancing BST", () => {
        runTests(BST.BST);
    });

    describe("Red-Black Tree", () => {
        // runTests(BST.RBTree, true);
    });
});
