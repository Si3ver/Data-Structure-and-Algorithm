// 正则表达式匹配
// 解法1， 作弊
var isMatch1 = function(s, p) {
    let reg = new RegExp(`^${p}$`)
    return reg.test(s)
};
// 解法2， 建模 (未考虑全面，不能通过全部测试用例！！)
var isMatch2 = function(str, mode) {
    // step1:                 无模式  字母和点 |  有模式 .*  a*
    let modeArr = mode.match(/([a-z.]\*)|([a-z.]+(?=([a-z.]\*)|$))/g)
    if (!modeArr) return false
    console.log(modeArr)
    let cur = 0, strLen = str.length
    for (let i = 0, il = modeArr.length; i < il; ++i) {
        let m = modeArr[i]
        if (m[1] !== '*') {                                // /[a-z.]*/g
            for (let j = 0, jl = m.length; j < jl; ++j) {
                if (m[j] !== '.' && m[j] !== str[cur]) {
                    return false
                } else {
                    ++cur
                }
            }
        } else if (m[0] === '.') {                         //  /\.\*/g
            cur = strLen
        } else {                                           //  /[a-z]\*/g
            while (str[cur] === m[0]) {
                ++cur
            }
        }
    }
    return cur === strLen
};

// --- test ---
let res1 = [], res2 = []
res1.push(isMatch1("aa", "a"))                      // f
res1.push(isMatch1("aa", "a*"))                     // t
res1.push(isMatch1("ab", ".*"))                     // t
res1.push(isMatch1("aab", "c*a*b"))                 // t
res1.push(isMatch1("mississippi", "mis*is*p*."))    // f
res1.push(isMatch1("mississippi", "mis*is*ip*."))   // t
res1.push(isMatch1("ab", ".*c"))                    // f
res1.push(isMatch1("aaa", "a*a"))                   // t
res2.push(isMatch2("aa", "a"))                    
res2.push(isMatch2("aa", "a*"))                   
res2.push(isMatch2("ab", ".*"))                   
res2.push(isMatch2("aab", "c*a*b"))               
res2.push(isMatch2("mississippi", "mis*is*p*."))  
res2.push(isMatch2("mississippi", "mis*is*ip*."))
res2.push(isMatch2("ab", ".*c"))
res2.push(isMatch2("aaa", "a*a"))                 // ! f  
console.log(res1, res2)
