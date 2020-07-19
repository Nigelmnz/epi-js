// What is the edit distance between two strings?
export default function editDistance2(A, B) {
  const data = new Array(A.length + 1).fill(0).map(() => []);
  const solve = function solve(i, j) {
    let result;
    if (data[i] && data[i][j]) {
      return data[i][j];
    } else if (i >= A.length || j >= B.length) {
      result = (i >= A.length) ? B.length - j : A.length - i;
    } else if (A[i] === B[j]) {
      result = solve(i + 1, j + 1);
    } else {
      const replaceCase = 1 + solve(i + 1, j + 1);
      const addCase = 1 + solve(i + 1, j);
      const rmCase = 1 + solve(i, j + 1);
      result = Math.min(replaceCase, addCase, rmCase);
    }

    data[i][j] = result;
    return result;
  };
  return solve(0, 0);
}
