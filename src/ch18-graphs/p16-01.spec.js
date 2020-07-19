import func from "./p16-01.js";

describe("Maze Searching", () => {
    const maze1 = [
        [0, 0],
        [0, 0],
    ];

    const maze2 = [
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 1],
        [0, 0, 0],
    ];

    const badMaze = [
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
    ];
    it("handles a trivial maze", () => {
        expect(func(maze1, [0, 0], [1, 1]).length).toEqual(3);
    });

    it("handle a maze with walls", () => {
        expect(func(maze2, [0, 0], [3, 2]).length).toEqual(6);
    });

    it("handle a maze with no solution", () => {
        expect(func(badMaze, [0, 0], [2, 2]).length).toEqual(0);
    });
});
