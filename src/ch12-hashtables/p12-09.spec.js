import func from "./p12-09.js";

describe("Anonymous Letter", () => {
    it("handles an empty letter", () => {
        expect(func("", "magazine")).toBe(true);
    });
    it("handles a single character letter", () => {
        expect(func("a", "magazine")).toBe(true);
    });
    it("handles a missing single character letter", () => {
        expect(func("q", "magazine")).toBe(false);
    });
    it("handles multiple letters", () => {
        expect(func("gooey", "you are a cool work guy")).toBe(true);
    });
    it("handles multiple missing letters", () => {
        expect(func("mario", "you are a cool work guy")).toBe(false);
    });
});
