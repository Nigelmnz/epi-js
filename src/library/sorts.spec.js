import * as Sorts from "./sorts.js";

describe("Sorts - ", () => {
    const runTests = function runTests(sorter) {
        it("handles no elems", () => {
            expect(sorter([])).toEqual([]);
        });

        it("handles one elem", () => {
            expect(sorter([4])).toEqual([4]);
        });

        it("handles two elems", () => {
            expect(sorter([7, 2])).toEqual([2, 7]);
        });

        it("handles three elems", () => {
            expect(sorter([6, 2, 7])).toEqual([2, 6, 7]);
        });

        it("handles repeats", () => {
            expect(sorter([4, 7, 3, 6, 3, 4])).toEqual([3, 3, 4, 4, 6, 7]);
        });

        it("handles many elems", () => {
            expect(sorter([2, 5, 8, 3, 10, 6, 7, 4, 1, 9])).toEqual([
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
            ]);
        });
    };

    describe("BubbleSort", () => {
        runTests(Sorts.BubbleSort);
    });

    describe("Insertion Sort", () => {
        runTests(Sorts.InsertionSort);
    });

    describe("Selection Sort", () => {
        runTests(Sorts.SelectionSort);
    });

    describe("Merge Sort", () => {
        runTests(Sorts.mergeSort);
    });

    describe("Merge Sort Iterative", () => {
        runTests(Sorts.mergeSortIter);
    });

    describe("Quick Sort Functional", () => {
        runTests(Sorts.quickSortFunc);
    });

    describe("Quick Sort", () => {
        runTests(Sorts.quickSort);
    });

    describe("Quick Sort Iterative", () => {
        runTests(Sorts.quickSortIter);
    });

    describe("Radix Sort", () => {
        runTests(Sorts.RadixSort);
    });

    describe("Heap Sort", () => {
        runTests(Sorts.HeapSort);
    });
});
