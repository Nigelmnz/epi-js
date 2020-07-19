import func from "./p10-01.js";

describe("Merging k sorted arrays", () => {
    it("handles one single digit array", () => {
        expect(func([[3]])).toEqual([3]);
    });

    it("handles many single digit arrays", () => {
        expect(func([[3], [6], [2], [1]])).toEqual([6, 3, 2, 1]);
    });

    it("handles one multi digit array", () => {
        expect(func([[6, 3, 2, 1]])).toEqual([6, 3, 2, 1]);
    });

    it("handles many multi digit arrays", () => {
        expect(
            func([
                [5, 4, 3],
                [8, 7, 6],
                [10, 2],
                [9, 1],
            ])
        ).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});
