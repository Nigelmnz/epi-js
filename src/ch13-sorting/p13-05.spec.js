import func from "./p13-05.js";

describe("Sorted Intersect", () => {
    it("handles two common single element arrays", () => {
        expect(func([4], [8])).toEqual([]);
    });
    it("handles two different single element arrays", () => {
        expect(func([8], [8])).toEqual([8]);
    });
    it("handles multiples", () => {
        expect(func([8, 8, 8, 8, 8, 8], [8])).toEqual([8]);
    });
    it("handles a general set", () => {
        expect(
            func([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 7], [3, 4, 7, 10, 15])
        ).toEqual([3, 4, 7]);
    });
});
