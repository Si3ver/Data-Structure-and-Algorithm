// 爬楼梯
// 即斐波那契数列
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    var prevprev = 1, prev = 2, cur;
    for (var i = 3; i <= n; ++i) {
        cur = prevprev + prev;
        prevprev = prev;
        prev = cur;
    }
    return cur;
};

// --- test ---
let res = []
res.push(climbStairs(1))
res.push(climbStairs(2))
res.push(climbStairs(3))
res.push(climbStairs(4))
res.push(climbStairs(5))
res.push(climbStairs(6))
res.push(climbStairs(7))
res.push(climbStairs(8))
console.log(res)
