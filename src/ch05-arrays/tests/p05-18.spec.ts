import { solution, lessSpaceSolution } from "../p05-18";

describe("Problem", () => {
    it("handles a single element", () => {
        expect(solution([[1]])).toEqual([1]);
        expect(lessSpaceSolution([[1]])).toEqual([1]);
    });

    it("handles a small grid", () => {
        const answer = [1, 2, 4, 3];
        expect(
            solution([
                [1, 2],
                [3, 4],
            ])
        ).toEqual(answer);
        expect(
            lessSpaceSolution([
                [1, 2],
                [3, 4],
            ])
        ).toEqual(answer);
    });

    it("handles book example 1", () => {
        const answer = [1, 2, 3, 6, 9, 8, 7, 4, 5];
        expect(
            solution([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ])
        ).toEqual(answer);
        expect(
            lessSpaceSolution([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ])
        ).toEqual(answer);
    });

    it("handles book example 2", () => {
        const answer = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
        expect(
            solution([
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16],
            ])
        ).toEqual(answer);
        expect(
            lessSpaceSolution([
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16],
            ])
        ).toEqual(answer);
    });
});
