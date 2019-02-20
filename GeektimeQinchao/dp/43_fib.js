// 用dp写法
let fib = (n, mem) => {
    if (n <= 1) return n
    else if (!mem[n]){
        mem[n] = fib(n-1, mem) + fib(n-2, mem); // 递推公司
        return mem[n];
    } else {
        return mem[n];
    }
}
console.log(fib(10, []));
