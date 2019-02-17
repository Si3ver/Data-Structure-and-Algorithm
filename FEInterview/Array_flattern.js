// 数组扁平化
// 解法一：reduce + 递归调用
let flatify1 = (arr) => (
    arr.reduce((prev, next)=>(
        prev.concat(Array.isArray(next) ? flatify1(next) : next)
    ), [])
);
// 解法二：Array.some + 展开运算符
let flatify2 = (arr) => {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)     // 一层一层剥
    }
    return arr
};

// --- test ---
let array = [1,2,3,[4,5,[6,7,[9]]]]
let res1 = flatify1(array)
let res2 = flatify2(array)
console.log(res1, res2)
