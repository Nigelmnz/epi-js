/*
Problem - Given a set of prices, find the most profit that could have been
made by buying once, then selling once. You can only buy or sell at start of day.

Insight - The best range ending at a point t needs to begin at the lowest point
to the left of t. Thus, we can scan the points and note the difference between
the lowest point seen and the current point.

Strategy - Greedily move through the history, noting the position of the minimum element.
For every interval, note if the delta between the current point and the lowest found
point is better than the best delta found.

O(n) runtime, O(1) space
*/
//
// export default function recurProfit(history) {
//   if (history.length > 2) {
//
//   }
// }

export default function maximizeProfit(history) {
  let minTime = 0;
  let curBest = 0;

  history.forEach((price, t) => {
    if (history[t] < history[minTime]) { minTime = t; }
    const possibleBest = history[t] - history[minTime];
    curBest = Math.max(curBest, possibleBest);
  });

  return curBest;
}
