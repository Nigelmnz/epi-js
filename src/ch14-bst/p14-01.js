// Determine is a tree is a BST.
export default function isBST(T, min = Number.NEGATIVE_INIFINITY, max = Number.POSITIVE_INFINITY) {
  if (!T) {
    return true;
  } else if (T.data <= min || T.data >= max) {
    return false;
  }

  return isBST(T.left, min, T.data) &&
         isBST(T.right, T.data, max);
}

export function stackIsBST(T) {
  const stack = [{ node: T, min: Number.NEGATIVE_INIFINITY, max: Number.POSITIVE_INFINITY }];
  while (stack.length > 0) {
    const { node, min, max } = stack.pop();
    if (node) {
      if (node.data <= min || node.data >= max) {
        return false;
      }
      stack.push({ node: node.right, min: node.data, max });
      stack.push({ node: node.left, min, max: node.data });
    }
  }

  return true;
}

export function iterIsBST(T) {
  let last = Math.NEGATIVE_INIFINITY;
  let ptr = T;
  while (ptr) {
    if (ptr.left) {
      let pred = ptr.left;
      while (pred.right && pred.right !== ptr) {
        pred = pred.right;
      }

      if (pred.right) {
        pred.right = null;
        if (ptr.data <= last) {
          return false;
        }
        last = ptr.data;
        ptr = ptr.right;
      } else {
        pred.right = ptr;
        ptr = ptr.left;
      }
    } else {
      if (ptr.data <= last) {
        return false;
      }
      last = ptr.data;
      ptr = ptr.right;
    }
  }
  return true;
}
