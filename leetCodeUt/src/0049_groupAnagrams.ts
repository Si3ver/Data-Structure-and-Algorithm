function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();
  const start = 'a'.codePointAt(0) as number;
  for (const str of strs) {
    const cntArr = Array(26).fill(0);
    for (let i = 0; i < str.length; ++i) {
      const idx = (str.codePointAt(i) as number) - start;
      ++cntArr[idx];
    }
    const key = cntArr.join();
    map.set(key, [...(map.get(key) || []), str]);
  }

  return Array.from(map.values());
};

export {groupAnagrams}
