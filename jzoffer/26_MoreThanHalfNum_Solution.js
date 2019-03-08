// 摩尔投票法
function MoreThanHalfNum_Solution(numbers)
{
    if (!numbers.length) return 0
    let cnt = 1, res = numbers[0]
    for (let i = 1; i < numbers.length; ++i) {
        if (res === numbers[i]) {
            ++cnt
        } else if (cnt > 0) {
            --cnt
        } else {
            res = numbers[i]
            cnt = 1
        }
    }
    // verify  --> 有些测试用例不按要求...
    cnt = 0
    for (let i = 0; i < numbers.length; ++i) {
        if (res === numbers[i]) ++cnt;
    }
    return cnt * 2 > numbers.length ? res : 0
}

console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]))
console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 4, 2, 5, 2, 3]))
