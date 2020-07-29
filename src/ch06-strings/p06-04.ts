/*
  Problem: Given an array of characters and a size N, remove each 'b' from the
  array, and replace all 'a's with two 'd's. Apply this operation only the first
  N characters.
*/

// The ideal solution. O(n) time, O(1) space. First remove 'b's,
// then double 'd's.
export function solution(input: string[], size: number): string[] {
    // First, move all of the "b" (deletion) characters to the end of the array.
    // We also find what the final size of the solution should be.
    let finalSize = 0;
    let insertPtr = 0;
    for (let i = 0; i < size; i++) {
        const char = input[i];
        if (char !== "b") {
            input[insertPtr] = char;
            insertPtr++;
            finalSize += char === "a" ? 2 : 1;
        }
    }

    // Now we fill the array from the end, expanding "a" characters as needed.
    // We read the characters backwards from our insert pointer, which is at the
    // first "b";
    input.length = finalSize;
    let i = insertPtr - 1;
    insertPtr = finalSize - 1;
    while (i >= 0) {
        const char = input[i];
        if (char === "a") {
            input[insertPtr] = input[insertPtr - 1] = "d";
            insertPtr -= 2;
        } else {
            input[insertPtr] = char;
            insertPtr -= 1;
        }
        i--;
    }

    return input;
}

// More straightforward solution, but O(n) additional space.
export function spaceSolution(input: string[], size: number): string[] {
    return input.slice(0, size).reduce((result: string[], x) => {
        if (x === "a") {
            result.push(...["d", "d"]);
        } else if (x !== "b") {
            result.push(x);
        }

        return result;
    }, []);
}
