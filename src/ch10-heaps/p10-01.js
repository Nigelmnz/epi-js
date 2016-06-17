/*
  Question: Given k sorted arrays, merge them using minimal RAM.
  Answer: We can do it in O(k logn) time by using a heap to quickly get the
  smallest number from each list.
*/

import MaxHeap from '../library/heap.js';

export default function mergeArrays(arrs) {
  const maxHeap = new MaxHeap();
  const answer = [];

  // Start by putting the largest number from each array onto the Maxheap
  arrs.forEach((arr, i) => {
    maxHeap.insert(arr[0], { val: arr[0], index: i });
  });

  // Then, just get the maximum number. Once you grab one, replace it with the next
  // number in its originating array. Eventually you run out of numbers, and you are done.
  while (maxHeap.data.length > 0) {
    const max = maxHeap.removeMax();
    const changedArray = arrs[max.index];
    answer.push(max.val);
    changedArray.shift();
    if (changedArray.length > 0) {
      maxHeap.insert(changedArray[0], { val: changedArray[0], index: max.index });
    }
  }
  return answer;
}
