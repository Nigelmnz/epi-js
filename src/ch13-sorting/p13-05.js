/*
  Question: How do we find the intersection of sorted lists A and B, without duplicates?

  Answer: Use sets.
*/

export default function sortedIntersect(A, B) {
  const set = new Set();
  const answer = [];
  A.forEach((n) => set.add(n));
  B.forEach((m) => {
    if (set.has(m)) {
      answer.push(m);
      set.delete(m);
    }
  });
  return answer;
}
