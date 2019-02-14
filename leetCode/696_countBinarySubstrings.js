// 计数二进制子串
var countBinarySubstrings = function(str) {
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

// --- test ---
let res = []
let originStr1 = "00110011"
res.push(countBinarySubstrings(originStr1))
let originStr2 = "10101"
res.push(countBinarySubstrings(originStr2))
let originStr3 = "00110"
res.push(countBinarySubstrings(originStr3))
console.log(res)
