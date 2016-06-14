/*
Problem: Find the parities of what might be a very large set of numbers.(Parity is 1
when a number has a odd number of 1's as bits, 0 otherwise.)

Solution: Precompute the parity of all 8-bit numbers. Then, given a 32 bit number, split it into 4 8-bit numbers, and find the total partity in constant time.
*/

let parityTable = Array(256).fill(0);

function calculateParity(num) {
  let n = num;
  let parity = 0;
  while (n > 0) {
    parity ^= (n & 1);
    n >>= 1;
  }

  return parity;
}

function findParity(num) {
  return parityTable[(num >> 24) & 255]
    ^ parityTable[(num >> 16) & 255]
    ^ parityTable[(num >> 8) & 255]
    ^ parityTable[(num) & 255];
}

export default function totalParity(sequence) {
  return sequence.map(findParity);
}

// Fill Table
parityTable = parityTable.map((n, i) => calculateParity(i));
