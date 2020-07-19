import func from "./p11-02.js";

describe("First Largest Element", () => {
    const largeset = [
        1,
        6,
        7,
        7,
        7,
        7,
        10,
        11,
        15,
        23,
        40,
        50,
        51,
        52,
        53,
        53,
        60,
    ];
    it("handles single element inputs", () => {
        expect(func([5], 2)).toEqual(0);
    });

    it("handles single element failures", () => {
        expect(func([5], 8)).toEqual(-1);
    });

    it("handles repeat element inputs", () => {
        expect(func([6, 7, 8, 8, 8, 9], 7)).toEqual(2);
    });

    it("handles repeat element failures", () => {
        expect(func([6, 7, 8, 8, 8, 9], 10)).toEqual(-1);
    });

    it("handles large sets", () => {
        expect(func(largeset, 5)).toEqual(1);
    });
});
