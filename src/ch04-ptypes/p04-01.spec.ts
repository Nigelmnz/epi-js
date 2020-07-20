import { totalParities, totalParitiesBruteForce } from "./p04-01";
import { timeFactor } from "../util/computeTime";

describe("Computing Parity", () => {
    it("handles a single number number with parity", () => {
        expect(totalParities([2])).toEqual([1]);
    });

    it("handles a single number number without parity", () => {
        expect(totalParities([3])).toEqual([0]);
    });

    it("handles many numbers that will have parity", () => {
        expect(totalParities([2, 4, 8, 16, 32, 64])).toEqual([
            1,
            1,
            1,
            1,
            1,
            1,
        ]);
    });

    it("handles many numbers that will not have parity", () => {
        expect(totalParities([3, 5, 9, 17, 33, 65])).toEqual([
            0,
            0,
            0,
            0,
            0,
            0,
        ]);
    });

    it("handles a mix of numbers", () => {
        expect(totalParities([3, 4, 9, 16, 33, 64])).toEqual([
            0,
            1,
            0,
            1,
            0,
            1,
        ]);
    });

    it("handles a large number", () => {
        expect(totalParities([31283678])).toEqual([1]);
    });

    it("handles a few large numbers", () => {
        expect(
            totalParities([
                31283671,
                31283672,
                12312312332,
                2019380923,
                132089731289,
                Number.MAX_SAFE_INTEGER,
                Number.MAX_SAFE_INTEGER - 1,
            ])
        ).toEqual([1, 1, 1, 1, 0, 1, 0]);
    });

    it("handles many large numbers twice as quickly than brute", () => {
        const largeNumbers = [
            Number.MAX_SAFE_INTEGER,
            Number.MAX_SAFE_INTEGER - 1,
        ];
        const solutions = [1, 0];
        const manyLargeNumbers = new Array(1000).fill(largeNumbers).flat();
        const manySolutions = new Array(1000).fill(solutions).flat();
        const computeSolution = () => {
            expect(totalParities(manyLargeNumbers)).toEqual(manySolutions);
        };
        const computeBrute = () => {
            expect(totalParitiesBruteForce(manyLargeNumbers)).toEqual(
                manySolutions
            );
        };
        expect(
            timeFactor(computeSolution, computeBrute)
        ).toBeGreaterThanOrEqual(2);
    });
});
