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
    let res = [], arr = [[],[],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]
    return digits.split('').reduce((prev, cur) => {
        return multiply(prev, arr[Number(cur)])
    }, [''])
};

// --- test ---
let res = []
let testStr1 = "234"
res.push(letterCombinations(testStr1))
console.log(res)
