// 快速幂算法
function Power(base, exponent)
{
    if (base === 0) return 0
    if (exponent === 0) return 1
    let e = Math.abs(exponent), res = 1
    while (e >= 1) {
        e & 1  && (res *= base)
        e = e>>1
        base *= base
    }
    return exponent > 0 ? res : 1/res
}
console.log(Power(2, 8))