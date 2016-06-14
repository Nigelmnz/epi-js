class Node {
  constructor(elem) {
    this.value = elem;
    this.next = null;
  }
}

export default class LinkedList {
  constructor(init) {
    this.head = null;
    this.tail = null;

    if (Array.isArray(init)) {
      init.forEach((x) => {
        this.add(x);
      });
    } else if (init) {
      this.add(init);
    }
  }

  add(elem) {
    const newNode = new Node(elem);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    return this;
  }

  remove(i) {
    let ptr = this.head;
    let count = 0;

    while (count < i - 1 && ptr) {
      ptr = ptr.next;
      count++;
    }

    if (ptr.next === this.tail) {
      this.tail = null;
    }

    if (ptr.next === this.head) {
      this.head = null;
    }
    ptr.next = ptr.next.next;

    return this;
  }

  toArray() {
    const arr = [];
    let ptr = this.head;

    while (ptr) {
      arr.push(ptr.value);
      ptr = ptr.next;
    }

    return arr;
  }
}
