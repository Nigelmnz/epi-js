/*
  Problem: Traverse a binary tree.
  Solution: Many. All run in O(n) time.
*/

/** * RECURSIVE SOlUTIONS * **/
// While elegant, these use O(n) space as their recursive calls grow the call stack.

export function inorderRecur(T) {
  if (!T) {
    return [];
  }

  return [...inorderRecur(T.left), T.data, ...inorderRecur(T.right)];
}

export function postorderRecur(T) {
  if (!T) {
    return [];
  }

  return [...postorderRecur(T.left), ...postorderRecur(T.right), T.data];
}

export function preorderRecur(T) {
  if (!T) {
    return [];
  }

  return [T.data, ...preorderRecur(T.left), ...preorderRecur(T.right)];
}


//* * * PARENT-BASED SOLUTIONS * **/
// If your binary tree has parent pointers, you can use them to traverse btrees using O(1) space.

export function inorderParent(T) {
  const answer = [];
  let ptr = T;
  let prev = null;
  let next = null;

  while (ptr) {
    // Moving down
    if (!prev || prev.left === ptr || prev.right === ptr) {
      if (ptr.left) {
        next = ptr.left;
      } else {
        answer.push(ptr.data);
        next = (ptr.right) ? ptr.right : ptr.parent;
      }
    // Moving up from the left
    } else if (ptr.left === prev) {
      answer.push(ptr.data);
      next = (ptr.right) ? ptr.right : ptr.parent;
    // Moving up from the right
    } else {
      next = ptr.parent;
    }

    prev = ptr;
    ptr = next;
  }

  return answer;
}

export function postorderParent(T) {
  const ans = [];
  let ptr = T;
  let prev = null;
  let next = null;

  while (ptr) {
    // Moving down
    if (!prev || prev.left === ptr || prev.right === ptr) {
      if (ptr.left) {
        next = ptr.left;
      } else {
        next = (ptr.right) ? ptr.right : ptr;
      }
    // Moving up from the left
    } else if (prev === ptr.left) {
      next = (ptr.right) ? ptr.right : ptr;
    // Moving up from the right or standing still
    } else {
      ans.push(ptr.data);
      next = ptr.parent;
    }

    prev = ptr;
    ptr = next;
  }

  return ans;
}

export function preorderParent(T) {
  const ans = [];
  let ptr = T;
  let prev = null;
  let next = null;

  while (ptr) {
    if (!prev || prev.left === ptr || prev.right === ptr) {
      ans.push(ptr.data);
      if (ptr.left) {
        next = ptr.left;
      } else {
        next = (ptr.right) ? ptr.right : ptr.parent;
      }
    } else if (prev === ptr.left) {
      next = (ptr.right) ? ptr.right : ptr.parent;
    } else {
      next = ptr.parent;
    }

    prev = ptr;
    ptr = next;
  }
  return ans;
}


/** * STACK-BASED SOlUTIONS * **/
// If you don't mind O(n) space complexity, but are afraid of a stack overflow
// from the recursive solutions, these traverse the tree using an explicit stack.

export function inorderStack(T) {
  const ans = [];
  const stack = [];
  let ptr = T;
  while (stack.length > 0 || ptr) {
    if (ptr) {
      stack.push(ptr);
      ptr = ptr.left;
    } else {
      ptr = stack.pop();
      ans.push(ptr.data);
      ptr = ptr.right;
    }
  }

  return ans;
}

export function preorderStack(T) {
  const ans = [];
  const stack = [T];

  while (stack.length > 0) {
    const cur = stack.pop();
    ans.push(cur.data);

    if (cur.right) {
      stack.push(cur.right);
    }

    if (cur.left) {
      stack.push(cur.left);
    }
  }

  return ans;
}
export function postorderStack(T) {
  const ans = [];
  const stack = [T];
  let ptr = null;

  while (stack.length > 0) {
    ptr = stack.pop();
    ans.unshift(ptr.data);
    if (ptr.left) {
      stack.push(ptr.left);
    }

    if (ptr.right) {
      stack.push(ptr.right);
    }
  }

  return ans;
}

/** * THREADING SOlUTIONS * **/
// If you are allowed to temporarily modify the original tree, you can
// utilize tree threading to traverse it in O(1) space.

export function inorderThread(T) {
  const ans = [];
  let ptr = T;
  while (ptr) {
    if (ptr.left) {
      let pred = ptr.left;
      while (pred.right && pred.right !== ptr) {
        pred = pred.right;
      }

      if (pred.right) {
        ans.push(pred.right.data);
        pred.right = null;
        ptr = ptr.right;
      } else {
        pred.right = ptr;
        ptr = ptr.left;
      }
    } else {
      ans.push(ptr.data);
      ptr = ptr.right;
    }
  }
  return ans;
}
