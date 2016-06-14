export default class Node {
  constructor(init) {
    this.next = null;
    this.value = null;

    // Supports both value and array initilizations
    if (Array.isArray(init)) {
      let ptr = this;
      ptr.value = init[0];
      init.slice(1).forEach((x) => {
        ptr.next = new Node(x);
        ptr = ptr.next;
      });
    } else if (init) {
      this.value = init;
    }
  }

  toArray() {
    const arr = [];
    let ptr = this;

    while (ptr) {
      arr.push(ptr.value);
      ptr = ptr.next;
    }

    return arr;
  }
}
