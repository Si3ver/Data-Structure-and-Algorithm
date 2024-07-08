// 思路: 存入一个map, key为字符串的字母频次, value为数组
export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>(), startCp: number = 'a'.codePointAt(0)!;
  strs.forEach(str => {
    const keyArr = Array(26).fill(0);
    for (let i = 0; i < str.length; ++i) {
      ++keyArr[str.codePointAt(i)! - startCp];
    }
    const keyStr = keyArr.join(',');
    if (!map.has(keyStr)) {
      map.set(keyStr, []);
    }
    map.get(keyStr)!.push(str);
  })
  return Array.from(map.values());
};
