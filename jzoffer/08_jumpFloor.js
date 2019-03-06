function jumpFloor(number)
{
    if (number <= 0) return 0
    if (number === 1) return 1
    if (number === 2) return 2
    let prepre = 1, pre = 2, res
    for (let i = 3; i <= number; ++i) {
        res = prepre + pre
        prepre = pre
        pre = res
    }
    return res
}