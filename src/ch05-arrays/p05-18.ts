/*
    Problem: Given a NxN array, return the clockwise spiral ordering of that
    array. As an example, the grid [1,2] should return [1,2,4,3].
                                   [3,4]
    Solution: Record and remove the first row, rotate the array, repeat.
    O(N^2) time, O(N^2) space.
*/

export function solution(input: number[][]): number[] {
    let solution: number[] = [];

    while (input.length > 0) {
        // Grab the top row of numbers
        solution = solution.concat(input[0]);

        //Remove the top row
        input = input.slice(1);

        // Rotate the rest of the grid counterclockwise
        if (input.length !== 0) {
            input = input[0].map((_, i) =>
                input.map((row) => row[row.length - i - 1])
            );
        }
    }

    return solution;
}

//A more complex solution that uses O(1) additional space
export function lessSpaceSolution(input: number[][]): number[] {
    const result = [];
    const dirs: {
        [key: string]: {
            delta: number[];
            next: string;
        };
    } = {
        UP: { delta: [0, -1], next: "RIGHT" },
        RIGHT: { delta: [1, 0], next: "DOWN" },
        DOWN: { delta: [0, 1], next: "LEFT" },
        LEFT: { delta: [-1, 0], next: "UP" },
    };
    let [curX, curY, curDir] = [0, 0, dirs.RIGHT];

    // The key idea is that we will walk through the matrix in clockwise order
    // and mutate it to note where we've been.
    while (result.length < input.length ** 2) {
        // Note the item
        result.push(input[curY][curX]);

        // Clear it
        input[curY][curX] = -1;

        //Move to the next element if possible, otherwise change directions
        const [nextX, nextY] = [curX + curDir.delta[0], curY + curDir.delta[1]];
        if (
            Math.min(nextX, nextY) >= 0 &&
            Math.max(nextX, nextY) < input.length &&
            input[nextY][nextX] !== -1
        ) {
            [curX, curY] = [nextX, nextY];
        } else {
            curDir = dirs[curDir.next];
            [curX, curY] = [curX + curDir.delta[0], curY + curDir.delta[1]];
        }
    }

    return result;
}
