// 计数二进制子串
// 解法1： 每次往后匹配第i个子串，如果match成功，就加一。 O(n) * O(match)
var countBinarySubstrings1 = function(str) {
    let match = (str) => {
        let j = str.match(/^(0+|1+)/)[0]                // 前面的连续1或0
        let o = (j[0] ^ 1).toString().repeat(j.length)  // 同样长度的0或1
        return str.startsWith(`${j}${o}`)
    }
    let cnt = 0
    for (let i = 0, len = str.length-1; i < len; ++i) {
        match(str.slice(i)) && ++cnt
    }
    return cnt
};

// 解法2： O(n)
var countBinarySubstrings2 = function(s) {
    let result = 0, curLen = 1, preLen = 0
    for (let i = 0, len = s.length - 1; i < len; i++) {
      if (s[i] === s[i+1]) {
        ++curLen
      } else {
        preLen = curLen
        curLen = 1
      }
      if (preLen >= curLen) {
        ++result
      }
    }
    return result
};


// --- test ---
let res1 = [], res2 = []
let originStr1 = "00110011"
res1.push(countBinarySubstrings1(originStr1))
res2.push(countBinarySubstrings2(originStr1))
let originStr2 = "10101"
res1.push(countBinarySubstrings1(originStr2))
res2.push(countBinarySubstrings2(originStr2))
let originStr3 = "00110"
res1.push(countBinarySubstrings1(originStr3))
res2.push(countBinarySubstrings2(originStr3))
console.log(res1, res2)
