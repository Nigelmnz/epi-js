/*
  Problem: Given a list of historical prices for a stock, find the maximum
  profit one could have made from a single buy and sell.

  Solution:
  The idea is by tracking the last best min as you pass through
  the array, you can also easily track the best profit possible going forward.
  Seeing a new max means the existing difference increases, and seeing a new
  min means you should only consider prices seen from that point forward.

  Runs in O(n).
*/

export default function solution(prices: number[]): number {
    let [lastBestMin, bestProfit] = [prices[0], 0];

    for (const price of prices) {
        lastBestMin = Math.min(lastBestMin, price);
        const curProfit = price - lastBestMin;
        bestProfit = Math.max(curProfit, bestProfit);
    }

    return bestProfit;
}
