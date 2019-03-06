function Fibonacci(n)
{
    if (n < 0) return false
    if (n === 0) return 0
    if (n === 1) return 1
    let prepre = 0, pre = 1, res;
    for (let i = 2; i <= n; ++i) {
        res = prepre + pre;
        prepre = pre
        pre = res
    }
    return res
}