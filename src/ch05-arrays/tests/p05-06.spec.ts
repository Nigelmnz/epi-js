import func from "../p05-06";

describe("Problem", () => {
    it("handles book example", () => {
        expect(
            func([310, 315, 275, 295, 260, 270, 290, 230, 255, 250])
        ).toEqual(30);
    });

    it("handles two prices", () => {
        expect(func([1, 3])).toEqual(2);
    });

    it("handles three prices", () => {
        expect(func([1, 2, 3])).toEqual(2);
    });

    it("handles an increasing profit range", () => {
        expect(func([1, 3, 0, 5])).toEqual(5);
    });

    it("handles a decreasing profit range", () => {
        expect(func([0, 5, 1, 3])).toEqual(5);
    });

    it("handles a large dip", () => {
        expect(func([5, 5, 5, 5, 0, 5, 5])).toEqual(5);
    });
});
