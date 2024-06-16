function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>(), startCodePoint: number = 'a'.codePointAt(0)!;
  strs.forEach((str) => {
    const keyArr: number[] = new Array(26).fill(0);
    for (const ch of str) {
      const index = ch.codePointAt(0)! - startCodePoint;
      ++keyArr[index]
    }
    if (!map.has(keyArr.join())) {
      map.set(keyArr.join(), []);
    }
    map.get(keyArr.join())!.push(str);
  })
  return Array.from(map.values());
};

export {groupAnagrams}
