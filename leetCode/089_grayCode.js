// 格雷编码
/* 关键是搞清楚格雷编码的生成过程, G(i) = i ^ (i/2);
    如 n = 3: 
    G(0) = 000, 
    G(1) = 1 ^ 0 = 001 ^ 000 = 001
    G(2) = 2 ^ 1 = 010 ^ 001 = 011 
    G(3) = 3 ^ 1 = 011 ^ 001 = 010
    G(4) = 4 ^ 2 = 100 ^ 010 = 110
    G(5) = 5 ^ 2 = 101 ^ 010 = 111
    G(6) = 6 ^ 3 = 110 ^ 011 = 101
    G(7) = 7 ^ 3 = 111 ^ 011 = 100
*/
var grayCode = function(n) {
    let res = []
    for (let i = 0, len = 1<<n; i < len; ++i) {
        res.push(i ^ i>>1)
    }
    return res
};

// --- test ---
let res = []
let n1 = 0
let n2 = 1
let n3 = 2
let n4 = 3
let n5 = 4
res.push(grayCode(n1).map(item => item.toString(2)))
res.push(grayCode(n2).map(item => item.toString(2)))
res.push(grayCode(n3).map(item => item.toString(2)))
res.push(grayCode(n4).map(item => item.toString(2)))
res.push(grayCode(n5).map(item => item.toString(2)))
console.log(res)
