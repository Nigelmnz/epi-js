/*
  Problem: Given a string L and a string M, detect whether string L can be build
  using the characters of sting M.

  Answer: Use a map/object to create a frequency chart of L. Then, depopulate
  the chart as you scan the characters of M. If you have an empty chart,
  you've succeeded.

*/

export default function AnonLetter(L, M) {
  const lFreq = new Map();

  // Scan L to populate lFreq
  L.split('').forEach((c) => {
    if (c !== ' ') {
      const count = lFreq.get(c);
      if (count) {
        lFreq.set(c, count + 1);
      } else {
        lFreq.set(c, 1);
      }
    }
  });

  // Scan M to depopulate lFreq
  M.split('').forEach((c) => {
    if (c !== ' ') {
      const count = lFreq.get(c);
      if (count) {
        lFreq.set(c, count - 1);
        if (count - 1 <= 0) {
          lFreq.delete(c);
        }
      }
    }
  });

  return lFreq.size === 0;
}
