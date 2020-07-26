import func from "../p06-01";

describe("Problem", () => {
    it("handles some examples", () => {
        expect(func(["123", 904, "-200", -455])).toEqual([
            123,
            "904",
            -200,
            "-455",
        ]);
    });
});
