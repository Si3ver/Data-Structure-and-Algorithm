/**
 * https://leetcode.cn/problems/lru-cache/
 * LRU 缓存
 *
 * medium
 *
 * 思路：利用 Map 的特点。m.delete(m.keys().next().value) 可删除 map 的最早项
 */

class LRUCache {
  constructor(size) {
    this.cache = new Map();
    this.SIZE = size;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }

  put(key, val) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, val);
    if (this.cache.size > this.SIZE) {
      const keys = this.cache.keys();
      this.cache.delete(keys.next().value);
    }
  }
}

// ----
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1
cache.put(4, 4);
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
