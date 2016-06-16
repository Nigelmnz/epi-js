/* eslint no-param-reassign: 0*/
/*
  Problem: Given an array and an index, rearrange the array such that
  all elements less than i are before i, and those greater are after it.
  Do it in linear time and constant space.
*/

export default function partition(arr, piv) {
  const swap = function swap(x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  };

  const pivot = arr[piv];

  // Basically, keep an "invisible array", noting the bounds of each part
  let [smaller, equal, larger] = [0, 0, arr.length - 1];

  while (equal <= larger) {
    if (arr[equal] < pivot) {
      swap(smaller++, equal++);
    } else if (arr[equal] === pivot) {
      equal++;
    } else {
      swap(equal, larger--);
    }
  }

  return arr;
}
