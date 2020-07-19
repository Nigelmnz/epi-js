import maxProfit from "./maxProfit.js";

describe("Profit Maximizing", () => {
    it("handles two increasing data points", () => {
        expect(maxProfit([3, 5])).toEqual(2);
    });

    it("handles two decreasing data points", () => {
        expect(maxProfit([5, 3])).toEqual(0);
    });

    it("handles many increasing data points", () => {
        expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
    });

    it("handles many decreasing data points", () => {
        expect(maxProfit([5, 4, 3, 2, 1])).toEqual(0);
    });

    it("handles dips", () => {
        expect(maxProfit([3, 4, 5, 1, 6, 7])).toEqual(6);
    });

    it("handles peaks", () => {
        expect(maxProfit([1, 4, 2, 3, 1])).toEqual(3);
    });
});
