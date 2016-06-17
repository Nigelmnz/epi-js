/*
  Question: How do you find the first element larger than n in a sorted list?

  Answer: Use binary search, noting whenever you see something greater than
  n. As you investigate smaller elements, you get better answers.

*/

export default function firstLargestElement(A, n) {
  let low = 0;
  let high = A.length - 1;
  let solution = -1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (A[mid] > n) {
      solution = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return solution;
}
