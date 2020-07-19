import func from "./p05-01";

describe("Computing Parity", () => {
    it("handles a single number number with parity", () => {
        expect(func([2])).toEqual([1]);
    });

    it("handles a single number number without parity", () => {
        expect(func([3])).toEqual([0]);
    });

    it("handles many numbers that will have parity", () => {
        expect(func([2, 4, 8, 16, 32, 64])).toEqual([1, 1, 1, 1, 1, 1]);
    });

    it("handles many numbers that will not have parity", () => {
        expect(func([3, 5, 9, 17, 33, 65])).toEqual([0, 0, 0, 0, 0, 0]);
    });

    it("handles a mix of numbers", () => {
        expect(func([3, 4, 9, 16, 33, 64])).toEqual([0, 1, 0, 1, 0, 1]);
    });

    it("handles a large number", () => {
        expect(func([31283678])).toEqual([1]);
    });

    it("handles many large numbers", () => {
        expect(func([31283678, 31283672, 12312312332, 2019380923])).toEqual([
            1,
            1,
            0,
            1,
        ]);
    });
});
