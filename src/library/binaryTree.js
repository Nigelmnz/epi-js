export default class BinaryTree {
  constructor(data, left = null, right = null, parent = null) {
    this.data = null;
    this.left = left;
    this.right = right;
    this.parent = parent;

    if (Array.isArray(data)) {
      const arrTree = this.treeFromArray(data);
      this.data = arrTree.data;
      this.left = arrTree.left;
      this.right = arrTree.right;
    } else {
      this.data = data;
      if (this.left) {
        this.left.parent = this;
      }

      if (this.right) {
        this.right.parent = this;
      }
    }
  }

  treeFromArray(A) {
    const arr = A.map((x) => new BinaryTree(x));

    arr.forEach((node, i) => {
      const lefti = 2 * i + 1;
      const righti = lefti + 1;
      const parenti = Math.ceil(i / 2) - 1;
      if (arr[lefti]) {
        node.left = arr[lefti];
      }
      if (arr[righti]) {
        node.right = arr[righti];
      }
      if (arr[parenti]) {
        node.parent = arr[parenti];
      }
    });

    return arr[0];
  }

  // Gets an inorder traversal using a morris traversal
  inorder() {
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
