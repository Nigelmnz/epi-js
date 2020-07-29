import { solution, spaceSolution } from "../p06-04";

[solution, spaceSolution].forEach((fn) => {
    describe(fn.name, () => {
        it("handles book example", () => {
            expect(fn(["a", "c", "d", "b", "b", "c", "a"], 7)).toEqual([
                "d",
                "d",
                "c",
                "d",
                "c",
                "d",
                "d",
            ]);
        });

        it("handles book example2", () => {
            expect(fn(["a", "b", "a", "c", "b", "c", "a"], 4)).toEqual([
                "d",
                "d",
                "d",
                "d",
                "c",
            ]);
        });
    });
});
