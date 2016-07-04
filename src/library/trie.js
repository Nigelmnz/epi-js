export default class Trie {
  constructor(weight = 0) {
    this.children = {};
    this.isLeaf = false;
    this.weight = weight;
  }

  // getAll(progress = '') {
  //   if (Object.keys(this.children).length === 0) {
  //     if (this.isLeaf) {
  //       return [progress];
  //     }
  //     return [];
  //   }
  //
  //   let result = (this.isLeaf) ? [progress] : [];
  //   Object.keys(this.children).forEach((k) => {
  //     const v = this.children[k];
  //     result = [...result, ...v.getAll(progress + k)];
  //   });
  //   return result;
  // }

  autocomplete(prefix) {
    // First, find the node that the prefix leads to
    let ptr = this;
    let result = prefix;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      const next = ptr.children[char];
      if (next) {
        ptr = next;
      } else {
        return prefix;
      }
    }

    // Once the node is found, go down the path of highest weight
    while (!ptr.isLeaf) {
      let bestWeight = 0;
      let char = '';
      for (const k of Object.keys(ptr.children)) {
        const v = ptr.children[k];
        if (v.weight > bestWeight) {
          bestWeight = v.weight;
          char = k;
        }
      }
      result += char;
      ptr = ptr.children[char];
    }

    return result;
  }

  getAll(prefix = '') {
    const results = [];
    const stack = [[this, prefix]];
    while (stack.length > 0) {
      const [ptr, str] = stack.pop();
      if (ptr.isLeaf) {
        results.push(str);
      }
      Object.keys(ptr.children).forEach((k) => {
        const v = ptr.children[k];
        stack.push([v, str + k]);
      });
    }

    return results;
  }

  getWithPrefix(str) {
    let ptr = this;
    let nextChild;
    for (let i = 0; i < str.length; i++) {
      nextChild = ptr.children[[str[i]]];
      if (!nextChild) {
        return [];
      }
      ptr = nextChild;
    }
    return ptr.getAll(str);
  }

  insert(str, weight = 0) {
    let ptr = this;
    let nextChild;
    for (let i = 0; i < str.length; i++) {
      nextChild = ptr.children[str[i]];
      if (!nextChild) {
        nextChild = new Trie(weight);
        ptr.children[str[i]] = nextChild;
      }
      ptr = nextChild;
    }
    ptr.isLeaf = true;
  }

  search(str) {
    let ptr = this;
    let nextChild;
    for (let i = 0; i < str.length; i++) {
      nextChild = ptr.children[[str[i]]];
      if (!nextChild) {
        return false;
      }
      ptr = nextChild;
    }
    return ptr.isLeaf;
  }

  delete(str, i = 0) {
    const char = str[i];
    if (char !== undefined) {
      const next = this.children[char];
      if (!next) {
        return false;
      }
      if (next.delete(str, i + 1)) {
        this.children[char] = null;
        delete this.children[char];
        return !this.isLeaf && Object.keys(this.children).length > 0;
      }

      return false;
    }
    if (this.isLeaf) {
      this.isLeaf = false;
      return Object.keys(this.children).length === 0;
    }
    return false;
  }

  // insert(str) {
  //   if (str.length > 0) {
  //     let nextChild = this.children[str[0]];
  //     if (!nextChild) {
  //       nextChild = new Trie();
  //       this.children[str[0]] = nextChild;
  //     }
  //     nextChild.insert(str.slice(1));
  //   } else {
  //     this.isLeaf = true;
  //   }
  // }
  //
  // search(str) {
  //   if (str.length > 0) {
  //     const nextChild = this.children[str[0]];
  //     if (nextChild) {
  //       return nextChild.search(str.slice(1));
  //     }
  //     return false;
  //   }
  //   return this.isLeaf;
  // }
}
