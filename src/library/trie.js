/**
 * A Trie (prefix tree) data structure for efficient string storage and retrieval.
 * Supports insertion, search, deletion, autocomplete, and prefix-based queries.
 */
export default class Trie {
  /**
   * Creates a new Trie node.
   * @param {number} weight - The weight for autocomplete priority (default: 0)
   */
  constructor(weight = 0) {
    this.children = {};
    this.isLeaf = false;
    this.weight = weight;
  }

  /**
   * Autocompletes a prefix by following the path of highest weight.
   * @param {string} prefix - The prefix to autocomplete
   * @returns {string} The completed string based on highest weights
   */
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

  /**
   * Gets all strings stored in the trie.
   * @param {string} prefix - The prefix to prepend to results (default: '')
   * @returns {string[]} Array of all strings in the trie
   */
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

  /**
   * Gets all strings with a given prefix.
   * @param {string} str - The prefix to search for
   * @returns {string[]} Array of all strings with the given prefix
   */
  getWithPrefix(str) {
    let ptr = this;
    let nextChild;
    for (let i = 0; i < str.length; i++) {
      nextChild = ptr.children[str[i]];
      if (!nextChild) {
        return [];
      }
      ptr = nextChild;
    }
    return ptr.getAll(str);
  }

  /**
   * Inserts a string into the trie.
   * @param {string} str - The string to insert
   * @param {number} weight - The weight for autocomplete priority (default: 0)
   */
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

  /**
   * Searches for a string in the trie.
   * @param {string} str - The string to search for
   * @returns {boolean} True if the string exists in the trie, false otherwise
   */
  search(str) {
    let ptr = this;
    let nextChild;
    for (let i = 0; i < str.length; i++) {
      nextChild = ptr.children[str[i]];
      if (!nextChild) {
        return false;
      }
      ptr = nextChild;
    }
    return ptr.isLeaf;
  }

  /**
   * Deletes a string from the trie.
   * @param {string} str - The string to delete
   * @param {number} i - The current index (used for recursion, default: 0)
   * @returns {boolean} True if this node should be deleted, false otherwise
   */
  delete(str, i = 0) {
    const char = str[i];
    if (char !== undefined) {
      const next = this.children[char];
      if (!next) {
        return false;
      }
      if (next.delete(str, i + 1)) {
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
}
