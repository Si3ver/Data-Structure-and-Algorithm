// 1
var reverseWords1 = function(s) {
    return s.split(' ').map((item => 
        (item.split('').reverse().join(''))
    )).join(' ')
};
// 2  可以处理多个空格的情况
var reverseWords2 = function(s) {
    return s.split(/\s/g).map((item => 
        (item.split('').reverse().join(''))
    )).join(' ')
};
// 3 match words。 不好！ 不能处理空字符串的情况，多个空格会缩短成一个！
var reverseWords3 = function(s) {
    return s.match(/[\w']+/g).map((item => 
        (item.split('').reverse().join(''))
    )).join(' ')
};


// --- test --- 
let res = []
let originStr1 = "Let's take  LeetCode contest"
res.push(reverseWords1(originStr1))
res.push(reverseWords2(originStr1))
res.push(reverseWords3(originStr1))
let originStr2 = ""
res.push(reverseWords1(originStr2))
res.push(reverseWords2(originStr2))
// res.push(reverseWords3(originStr2))
console.log(res)
