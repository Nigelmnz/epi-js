export default class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = null;

    if (this.left) {
      this.left.parent = this;
    }

    if (this.right) {
      this.right.parent = this;
    }
  }

  morrisTraversal() {
    const result = [];
    let pointer = this;

    while (pointer) {
      if (pointer.left) {
        // Find the predecessor of our pointer
        let pred = pointer.left;
        while (pred.right && pred.right !== pointer) {
          pred = pred.right;
        }

        if (pred.right) {
          result.push(pred.right.data);
          pred.right = null;
          pointer = pointer.right;
        } else {
          pred.right = pointer;
          pointer = pointer.left;
        }
      } else {
        result.push(pointer.data);
        pointer = pointer.right;
      }
    }
    return result;
  }
}
