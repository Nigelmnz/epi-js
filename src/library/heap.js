export default class Heap {
  constructor() {
    this.data = [];
  }

  insert(rank, data = rank) {
    this.data.push({ rank, data });
    this.heapifyUp(this.data.length - 1);
  }

  heapifyUp(i) {
    const parentIndex = this.parent(i);
    if (i !== 0 && this.data[i].rank > this.data[parentIndex].rank) {
      this.swap(i, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(i) {
    const leftIndex = this.leftChild(i);
    const rightIndex = this.rightChild(i);
    const lVal = this.data[leftIndex];
    const rVal = this.data[rightIndex];
    let nextIndex = i;
    if (lVal && rVal) {
      nextIndex = (lVal.rank > rVal.rank) ? leftIndex : rightIndex;
    } else if (lVal) {
      nextIndex = leftIndex;
    }

    if (this.data[nextIndex].rank > this.data[i].rank) {
      this.swap(i, nextIndex);
      this.heapifyDown(nextIndex);
    }
  }

  swap(i, j) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  removeMax() {
    const max = this.max();
    this.data[0] = this.data.slice(-1)[0];
    this.data.pop();

    if (this.data.length > 0) {
      this.heapifyDown(0);
    }
    return max;
  }

  max() {
    return this.data[0].data;
  }

  getData() {
    return this.data.map((x) => x.data);
  }

  parent(i) {
    return Math.ceil(i / 2) - 1;
  }

  leftChild(i) {
    return i * 2 + 1;
  }

  rightChild(i) {
    return i * 2 + 2;
  }
}
