/**
 * https://leetcode.cn/problems/implement-trie-prefix-tree/description
 *
 * 实现 Trie 树
 *
 */

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (node[ch] == void(0)) {
        node[ch] = {};
      }
      node = node[ch];
    }
    node.isWord = true;
  }

  _traverse(word) {
    let node = this.root;
    for (const ch of word) {
      node = node[ch];
      if (!node) return null;
    }
    return node;
  }

  search(word) {
    const node = this._traverse(word);
    return !!node && !!node.isWord;
  }

  startsWith(prefix) {
    const node = this._traverse(prefix);
    return !!node;
  }
}

// ---- test case ----
var trie = new Trie()
trie.insert("apple")
// console.log(JSON.stringify(trie));
console.log(trie.search("bbb"))
console.log(trie.search("apple"))   // 返回 true
console.log(trie.search("app"))     // 返回 false
console.log(trie.startsWith("app")) // 返回 true
console.log(trie.startsWith("apbbb")) // 返回 false
trie.insert("app")
console.log(trie.search("app"))     // 返回 true

