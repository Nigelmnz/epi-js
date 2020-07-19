import func from "./p15-11.js";

describe("Edit Distance", () => {
    it("handles empty strings", () => {
        expect(func("", "")).toEqual(0);
    });

    it("handles a character", () => {
        expect(func("q", "")).toEqual(1);
    });

    it("handles single strings", () => {
        expect(func("qwerty", "")).toEqual(6);
        expect(func("", "qwerty")).toEqual(6);
    });

    it("handles all replace", () => {
        expect(func("mega", "lolo")).toEqual(4);
    });

    it("handles a complex case", () => {
        expect(func("Carthorse", "Orchestra")).toEqual(8);
    });

    it("handles a deceptive case", () => {
        expect(func("cow", "own")).toEqual(2);
    });
});
