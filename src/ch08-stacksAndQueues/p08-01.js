/*
  Problem: Design a stack that supports a 'max' operation. Must use constant time,
  and at most, linear space.

  Solution: Store an additional 'maxstack' which updates if new elements are greater
  or equal to its top element. The top of this stack will always represent the maximum element.
*/

export default class MaxStack {
  constructor() {
    this.data = [];
    this.maxStack = [];
  }

  pop() {
    const elem = this.data.pop();
    if (this.max() === elem) {
      this.maxStack.pop();
    }
    return elem;
  }

  push(n) {
    if (this.maxStack.length === 0 || n >= this.max()) {
      this.maxStack.push(n);
    }

    this.data.push(n);
    return this.data.length;
  }

  max() {
    return this.maxStack.slice(-1)[0];
  }

}
