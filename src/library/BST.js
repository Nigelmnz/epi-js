import BT from './binaryTree.js';

export class BST extends BT {

  depthDifference() {
    const maxDepth = function maxDepth(node) {
      if (!node) {
        return 0;
      }
      return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    };

    const minDepth = function minDepth(node) {
      if (!node) {
        return 0;
      }
      return 1 + Math.min(minDepth(node.left), minDepth(node.right));
    };

    return Math.abs(minDepth(this) - maxDepth(this));
  }

  isBalanced() {
    return this.depthDifference < 2;
  }

  count(n = this) {
    if (!n) {
      return 0;
    }

    return 1 + this.count(n.left) + this.count(n.right);
  }

  isFairlyBalanced() {
    const maxDepth = function maxDepth(node) {
      if (!node) {
        return 0;
      }
      return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    };

    return maxDepth(this) <= 2 * Math.log2(this.count() + 1);
  }

  isBalanced2() {
    const stack = [[this, 0]];
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    while (stack.length > 0) {
      const [ptr, depth] = stack.pop();
      if (ptr.left) {
        stack.push([ptr.left, depth + 1]);
      }

      if (ptr.right) {
        stack.push([ptr.right, depth + 1]);
      }

      if (!ptr.left || !ptr.right) {
        min = Math.min(min, depth);
        max = Math.max(max, depth);
      }
    }
    return Math.abs(min - max) <= 1;
  }

  insert(x) {
    if (Array.isArray(x)) {
      x.forEach((n) => this.insertSingle(this, n));
    } else {
      return this.insertSingle(this, x);
    }
    return true;
  }

  insertSingle(node, data, Treetype = BST) {
    if (data <= node.data) {
      if (node.left) {
        return this.insertSingle(node.left, data, Treetype);
      }
      node.left = new Treetype(data, null, null, node);
      return node.left;
    } else if (data > node.data) {
      if (node.right) {
        return this.insertSingle(node.right, data, Treetype);
      }
      node.right = new Treetype(data, null, null, node);
      return node.right;
    }
    return node;
  }

  contains(x) {
    if (x === this.data) {
      return true;
    } else if (x <= this.data) {
      return this.left !== null && this.left.contains(x);
    }

    return this.right !== null && this.right.contains(x);
  }

  find(x, node = this) {
    if (node === null || x === node.data) {
      return node;
    } else if (x <= node.data) {
      return this.find(x, node.left);
    }

    return this.find(x, node.right);
  }

  findParent(x, node = this, parent = null) {
    if (node === null || x === node.data) {
      return (node) ? parent : null;
    } else if (x <= node.data) {
      return this.findParent(x, node.left, node);
    }

    return this.findParent(x, node.right, node);
  }

  delete(x) {
    const parent = this.findParent(x);
    let node = null;
    if (parent && (parent.left.data === x || parent.right.data === x)) {
      node = (parent.left.data === x) ? parent.left : parent.right;
    }

    if (node) {
      // Case 1, is a parent of two children
      if (node.right && node.left) {
        // Find the successor of our node
        let succ = node.right;
        while (succ.left !== null) {
          succ = succ.left;
        }

        // Delete the successor
        this.delete(succ.data);

        // Copy the successor's data
        node.data = succ.data;
      } else if (node.right || node.left) {
        // Case 2, is a parent of one child. Connect the child to the parent.
        const child = (node.left) ? node.left : node.right;
        if (parent.left === node) {
          parent.left = child;
        } else {
          parent.right = child;
        }

        child.parent = parent;
        node.parent = null;
        this.count--;
      } else {
        // Case 3, is a leaf. Just remove it.
        if (parent.left === node) {
          parent.left = null;
        } else {
          parent.right = null;
        }
        node.parent = null;
        this.count--;
      }
    }
  }


  // insertSingle(x) {
  //   let ptr = this;
  //   while (ptr) {
  //     let next = null;
  //     if (x <= ptr.data) {
  //       if (!ptr.left) {
  //         ptr.left = new NormalBST(x, null, null, ptr);
  //       } else {
  //         next = ptr.left;
  //       }
  //     } else if (x > ptr.data) {
  //       if (!ptr.right) {
  //         ptr.right = new NormalBST(x, null, null, ptr);
  //       } else {
  //         next = ptr.right;
  //       }
  //     }
  //     ptr = next;
  //   }
  // }
}

export class RBTree extends BST {
  constructor(...args) {
    super(...args);
    this.BLACK = 'black';
    this.RED = 'red';
    this.color = this.BLACK;
  }

  grandparent(node) {
    if (node !== null && node.parent !== null) {
      return node.parent.parent;
    }

    return null;
  }

  uncle(node) {
    const grandpa = this.grandparent(node);
    if (!grandpa) {
      return null;
    } else if (node.parent === grandpa.left) {
      return grandpa.right;
    }

    return grandpa.left;
  }

  rotateLeft(node) {
    const parent = node.parent;
    const targetChild = node.right;
    const transferChildren = targetChild.left;
    // First alter our parent's pointers
    if (parent && parent.left === node) {
      parent.left = targetChild;
    } else if (parent && parent.right === node) {
      parent.right = targetChild;
    }

    // Now alter the parent pointers for everything
    node.parent = targetChild;
    targetChild.parent = parent;
    if (transferChildren) {
      transferChildren.parent = node;
    }

    // Now move the children over
    node.right = transferChildren;
    targetChild.left = node;
  }

  rotateRight(node) {
    const parent = node.parent;
    const targetChild = node.left;
    const transferChildren = targetChild.right;
    // First alter our parent's pointers
    if (parent && parent.left === node) {
      parent.left = targetChild;
    } else if (parent && parent.right === node) {
      parent.right = targetChild;
    }

    // Now alter the parent pointers for everything
    node.parent = targetChild;
    targetChild.parent = parent;
    if (transferChildren) {
      transferChildren.parent = node;
    }

    // Now move the children over
    node.left = transferChildren;
    targetChild.right = node;
  }

  handleRotations(node) {
    // const unc = this.uncle(node);
    const grandpa = this.grandparent(node);
    const parent = node.parent;
    // There are 4 cases
    if (parent.left === node && grandpa.left === parent) {
      //     g          p
      //    /          / \
      //   p     ->   n   g
      //  /
      // n

      this.rotateRight(grandpa);
      const gColor = grandpa.color;
      grandpa.color = parent.color;
      parent.color = gColor;
    } else if (parent.right === node && grandpa.left === parent) {
      //     g                      p
      //    /                      / \
      //   p     -> (case 1) ->   n   g
      //    \
      //     n

      this.rotateLeft(parent);
      this.handleRotations(parent);
    } else if (parent.right === node && grandpa.right === parent) {
      //  g             p
      //   \           / \
      //    p    ->   g   n
      //     \
      //      n

      this.rotateLeft(grandpa);
      const gColor = grandpa.color;
      grandpa.color = parent.color;
      parent.color = gColor;
    } else if (parent.left === node && grandpa.right === parent) {
      //     g                       p
      //      \                     / \
      //       p  -> (case 3) ->   g   n
      //      /
      //     n

      this.rotateRight(parent);
      this.handleRotations(parent);
    }
  }

  delete(x) {
    super.delete(x);
  }

  checkAndFix(node) {
    // Is this root? If so, it must be BLACK
    if (!node.parent) {
      node.color = this.BLACK;
    } else {
      // Node is red. Is our parent red?
      if (node.parent.color === this.RED) {
        // Two reds are touching. Need to fix it.
        // Two cases here. Is our uncle red?
        const unc = this.uncle(node);
        const grandpa = this.grandparent(node);
        const parent = node.parent;
        if (unc && unc.color === this.RED) {
          // In this case, we can just swap the colors of our grandpa and
          // his children to fix the double-red

          parent.color = this.BLACK;
          unc.color = this.BLACK;
          grandpa.color = this.RED;

          // Now fix colors from our grandpa's perspective
          this.checkAndFix(grandpa);
        } else {
          // In this case, our uncle is black or non-existant.
          // Color swapping alone will not fix the graph, so we need rotation.
          this.handleRotations(node);
        }
      }
      // Our parent is black. We are fine.
    }
  }

  // checkAndFix(node) {
  //   // Now check if our properties were violated
  //   if (node.parent.color === this.RED) {
  //     // We now have a double-red situation
  //     // First, we need to check our uncle's color
  //     const unc = this.uncle(node);
  //     let grandpa = this.grandparent(node);
  //     if (!unc || unc.color === this.BLACK) {
  //       // Depending on the ordering, our rotation will change
  //       let nextNode = node;
  //       if (node === node.parent.right && node.parent === grandpa.left) {
  //         // parent < node < grandpa
  //         this.rotateLeft(node.parent);
  //         nextNode = node.left;
  //       } else if (node === node.parent.left && node.parent === grandpa.right) {
  //         // grandpa < node < parent
  //         this.rotateRight(node.parent);
  //         nextNode = node.right;
  //       }
  //
  //       grandpa = this.grandparent(nextNode);
  //
  //       nextNode.parent.color = this.BLACK;
  //       grandpa.color = this.RED;
  //       if (nextNode === nextNode.parent.left) {
  //         this.rotateRight(grandpa);
  //       } else {
  //         this.rotateLeft(grandpa);
  //       }
  //     } else {
  //       // If your uncle is red, then swap the colors of your grandpa and his children
  //       grandpa.left.color = this.BLACK;
  //       grandpa.right.color = this.BLACK;
  //       if (grandpa.parent) {
  //         // Only change your grandpas color if he isn't the root,
  //         // since we need to preserve the root property.
  //         grandpa.color = this.RED;
  //
  //         // Make sure you didn't introduce a color error
  //         this.checkAndFix(grandpa);
  //       }
  //     }
  //   }
  // }

  insertSingle(...args) {
    const node = super.insertSingle(...args, RBTree);
    node.color = this.RED;
    this.checkAndFix(node);
    return node;
  }
}
