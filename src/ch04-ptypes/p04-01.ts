/*
Problem: Find the parities of what might be a very large set of 64 bit numbers.
(Parity is 1 when a number has a odd number of 1's as bits, 0 otherwise.)
*/

// Solution A
/* For demonstration, a brute force solution for finding a parity of a number.
Will be relatively slow when dealing with a huge list of numbers.
Note that instead of using the bitshift operator, we use the mathematical
equivalent of halving. This is because proper shifting fails in JS when handling
 a number with greater than 32 bits. */
// Time: O(b), where b is bits
function bruteForceParity(n: number) {
    let parity = 0;
    while (n > 0) {
        /* To track parity, we use the XOR operator,
        flipping our parity bit each time we find a bit in our number. */
        parity ^= n & 1;

        // As noted before, we divide instead of using >>> 1.
        n = Math.floor(n / 2);
    }
    return parity;
}

// Solution B
/* To save time, we'll use a precomputed list of parities for all 16-bit
numbers. This way, we only need to check four 16bit blocks, rather than 64
individual bits. That's about a 4X speedup! */
// Time: O(b/m), where m is the max bit size of the precomputed parity table.
const BIT16_MAX = Math.pow(2, 16);
const parityTable = new Array(BIT16_MAX)
    .fill(0)
    .map((x, i) => bruteForceParity(i));
function precomputedParity(n: number) {
    let parity = 0;
    while (n > 0) {
        parity ^= parityTable[n & (BIT16_MAX - 1)];
        n = Math.floor(n / BIT16_MAX);
    }
    return parity;
}

// Solution C
/* By realizing that the XOR of each bit of a number is it's parity, we also
realize that the XOR of the first and second half of a binary number must have
the same parity as the original number. We can repeatedly do this, halving the
effective bit size each time, until we are down to a single bit, which is the
parity of the original number. */
// Time: O(log b), where b is bits
const BIT32_NUM = Math.pow(2, 32);
function parity(n: number) {
    /* A number larger than 32 bits is squashed to 32 bits when bitshifted in
    JS. Thus, the first halving will be done via division. Successive shifts are
    safe, as the signigant digits will be in the first 32 bits of our computed
    number. */
    n ^= Math.floor(n / BIT32_NUM);

    n ^= n >>> 16;
    n ^= n >>> 8;
    n ^= n >>> 4;
    n ^= n >>> 2;
    n ^= n >>> 1;
    return n & 1;
}

export function totalParitiesBruteForce(sequence: number[]): number[] {
    return sequence.map(bruteForceParity);
}

export function totalParitiesPrecomputed(sequence: number[]): number[] {
    return sequence.map(precomputedParity);
}

export function totalParities(sequence: number[]): number[] {
    return sequence.map(parity);
}
