/* eslint no-param-reassign: 0, no-loop-func: 0, no-unused-vars: 0 */
/*
  So many sorts!
*/

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/*
  Bubblesort. Avg runtime: O(n^2). A terrible sort. Basically, go through the array,
  swapping elements if they are out of order. Keep doing this until you no
  longer needed to swap anything. Useful for amusement.
*/
export function BubbleSort(A) {
  // Make a copy to avoid modifying the original
  const arr = A.slice();
  let swapped = true;
  while (swapped) {
    swapped = false;
    arr.forEach((x, i) => {
      if (arr[i + 1] && arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    });
  }

  return arr;
}

/*
  Insertion sort. Avg runtime: O(n^2). Go through each element, and make sure
  every element before it is in order. If it isn't, swap it into order. Useful for
  small inputs or online sorting.
*/
export function InsertionSort(A) {
  // Make a copy to avoid modifying the original
  const arr = A.slice();
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(arr, j, j - 1);
      j--;
    }
  }

  return arr;
}

/*
  Selection sort. Avg runtime: O(n^2). Starting from each element, find the
  smallest element after it. Swap it into the position of the current element.
*/
export function SelectionSort(A) {
  // Make a copy to avoid modifying the original
  const arr = A.slice();
  arr.forEach((x, i) => {
    let minI = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minI]) {
        minI = j;
      }
    }

    if (minI !== i) {
      swap(arr, i, minI);
    }
  });

  return arr;
}
/*
  Merge sort. Avg runtime: O(n*logn). Sorting involves spitting the array in two,
  sorting the two halves, then merging them. This works recursively. The basecase
  is when given a one element array, this is already sorted. Is a stable sort.
*/
function mergeRecur(A, B) {
  const [a, ...as] = A;
  const [b, ...bs] = B;
  if (a && b) {
    if (a <= b) {
      return [a, ...mergeRecur(as, B)];
    }
    return [b, ...mergeRecur(A, bs)];
  } else if (a || b) {
    return (a) ? A : B;
  }

  return [];
}

function merge(A, B) {
  const result = [];
  let l = 0;
  let r = 0;
  while (l < A.length && r < B.length) {
    if (A[l] <= B[r]) {
      result.push(A[l++]);
    } else {
      result.push(B[r++]);
    }
  }

  return [...result, ...A.slice(l), ...B.slice(r)];
}

export function mergeSort(A) {
  const mid = A.length >> 1;
  if (A.length < 2) {
    return A;
  }

  return merge(mergeSort(A.slice(0, mid)), mergeSort(A.slice(mid)));
}

export function mergeSortIter(A) {
  // Make a copy to avoid modifying the original
  const arr = A.slice();

  for (let curSize = 1; curSize < arr.length; curSize *= 2) {
    for (let lStart = 0; lStart < arr.length; lStart += 2 * curSize) {
      const left = arr.slice(lStart, lStart + curSize);
      const right = arr.slice(lStart + curSize, lStart + curSize * 2);
      const merged = merge(left, right);
      Array.prototype.splice.apply(arr, [lStart, merged.length, ...merged]);
    }
  }


  return arr;
}

/*
  Quicksort. Avg runtime: O(n*logn) Grab a pivot, then sort the elements <= pivot,
  and elements >= pivot. Concat all of them together in order. Recursive in nature,
  array of a single element is the base case. Is not a stable sort. In most cases,
  it should be an in-place sort.
*/

// Modifies the array to one that is partitioned. Returns the location of the pivot.
function partition(A, l, r) {
  const pivot = A[Math.floor(l + (r - l) / 2)];
  let [smaller, greater] = [l, r];

  while (smaller <= greater) {
    while (A[smaller] < pivot) {
      smaller++;
    }

    while (A[greater] > pivot) {
      greater--;
    }

    if (smaller <= greater) {
      swap(A, smaller, greater);
      smaller++;
      greater--;
    }
  }


  return smaller;
}


export function quickSort(A, left = 0, right = A.length - 1) {
  if (left < right) {
    const index = partition(A, left, right);
    quickSort(A, left, index - 1);
    quickSort(A, index, right);
  }

  return A;
}

// A neat but slow way to represent qSort.
export function quickSortFunc(A) {
  const [pivot, ...rest] = A;

  if (A.length < 2) {
    return A;
  }

  const lesseq = quickSortFunc(rest.filter((x) => x <= pivot));
  const greater = quickSortFunc(rest.filter((x) => x > pivot));

  return [...lesseq, pivot, ...greater];
}

// What if you were afraid of overflow?
export function quickSortIter(A) {
  const stack = [[0, A.length - 1]];
  while (stack.length > 0) {
    const [start, end] = stack.pop();
    if (start < end) {
      const index = partition(A, start, end);
      stack.push([start, index - 1]);
      stack.push([index, end]);
    }
  }
  return A;
}
/*
  Radix sort. Avg runtime: O(k*n) For up to k digits, perform a counting sort
  using the i'th digit of each number. Almost linear.
*/
export function RadixSort(A) {
  const max = Math.max(...A);
  let arr = A.slice();
  if (A.length > 0) {
    for (let place = 1; max / place >= 1; place *= 10) {
    // Perform a counting sort for the nth-place digit
      const buckets = Array(10).fill(0).map((x) => []);

    // Fill the Buckets
      arr.forEach((x) => {
        const digit = Math.floor(x / place) % 10;
        buckets[digit].push(x);
      });

    // Dump them out
      arr = buckets.reduce((sorted, bucket) => [...sorted, ...bucket], []);
    }
  }

  return arr;
}

/*
  sort. Avg runtime: O(n logn)
*/
function parenti(n) {
  return Math.ceil(n / 2) - 1;
}

function leftChildi(n) {
  return n * 2 + 1;
}

function siftDown(A, start, end) {
  let node = start;
  while (leftChildi(node) <= end) {
    const lchild = leftChildi(node);
    const rchild = lchild + 1;
    let swapVal = node;

    if (A[lchild] > A[swapVal]) {
      swapVal = lchild;
    }

    if (rchild <= end && A[swapVal] < A[rchild]) {
      swapVal = rchild;
    }

    if (swapVal === node) {
      return;
    }

    swap(A, swapVal, node);
    node = swapVal;
  }
}

function heapify(A) {
  let lastParent = parenti(A.length - 1);

  while (lastParent >= 0) {
    siftDown(A, lastParent, A.length - 1);
    lastParent--;
  }
}

export function HeapSort(A) {
  // Make a copy to avoid modifying the original
  const arr = A.slice();
  let end = arr.length - 1;

  // First, turn the array into a maxheap. O(n)
  heapify(arr);

  // for each element starting from the end: O(n)
  while (end > 0) {
    // Grab the largest element, and place it in the back.
    swap(arr, 0, end);

    // Update the endpoint. Everything after end is sorted.
    end--;

    // Restore the heap. O(logn)
    siftDown(arr, 0, end);
  }

  return arr;
}
