/*
  Problem: Given an array and an index, rearrange the array such that
  all elements less than i are before i, and those greater are after it.
  Do it in linear time and constant space.
*/

export default function solution(arr: number[], index: number): number[] {
    const pivot = arr[index];
    let smallerPtr = 0;
    let largerPtr = arr.length - 1;
    let searchPtr = 0;

    function swap(i: number, j: number) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // We'll scan the array, swapping elements larger than index to the end of
    // the array, and elements smaller to the start. As we swap elements, we
    // will maintain two index pointers which track the boundaries of where
    // the smaller and larger elements are located in the array, and serve as
    // the insertion points for future elements.

    while (searchPtr <= largerPtr) {
        const searchValue = arr[searchPtr];
        if (searchValue < pivot) {
            swap(smallerPtr, searchPtr);
            smallerPtr++;
            searchPtr++;
        } else if (searchValue > pivot) {
            swap(largerPtr, searchPtr);
            largerPtr--;
        } else {
            searchPtr++;
        }
    }

    return arr;
}
