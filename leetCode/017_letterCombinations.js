// 电话号码的字母组合
// 解法1，用reduce。输出两两数组的全排列
var letterCombinations = function(digits) {
    if (!digits.length) return [];

    let multiply = (arr1, arr2) => {
        let innerRes = []
        for (let i = 0, len1 = arr1.length; i < len1; ++i) {
            for (let j = 0, len2 = arr2.length; j < len2; ++j) {
                innerRes.push(arr1[i]+arr2[j])
            }
        }
        return innerRes
    }
    let arr = [
      [],
      [],
      ['a','b','c'],
      ['d','e','f'],
      ['g','h','i'],
      ['j','k','l'],
      ['m','n','o'],
      ['p','q','r','s'],
      ['t','u','v'],
      ['w','x','y','z']
    ]
    return digits.split('').reduce((prev, cur) => {
        return multiply(prev, arr[Number(cur)])
    }, [''])
};

// 解法二：回溯
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const dfs = (level, path) => {
    // terminator
    if (level === digits.length) {
      res.push(path.join(''));
      return;
    }
    // process
    const selectors = map.get(digits[level]);
    for (let i = 0; i < selectors.length; ++i) {
      path.push(selectors[i]);
      dfs(level + 1, path);
      path.pop();
    }
  }
  const map = new Map([
    ['2', 'abc'], ['3', 'def'], ['4', 'ghi'],
    ['5', 'jkl'], ['6', 'mno'], ['7', 'pqrs'],
    ['8', 'tuv'], ['9', 'wxyz'],
  ]);
  const res = [];
  dfs(0, []);
  return res;
}

// --- test ---
console.log(letterCombinations("234"));
console.log(letterCombinations("9"));
