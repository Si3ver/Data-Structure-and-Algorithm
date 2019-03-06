// 要保证奇偶数的稳定性
// O(n), 只遍历一轮，且不开辟新数组空间。
function reOrderArray(arr)
{
    if (!arr.length) return arr
    let i = 0, j = 0
    while (i < arr.length && j < arr.length) {
        while (i < arr.length && (arr[i]&1)) ++i  // 找个偶数arr[i]
        j = i + 1
        while (j < arr.length && !(arr[j]&1)) ++j  // 找个奇数arr[j]，i~j-1的都是偶数
        // 偶数[i, ..., j-1]后挪一位，j挪到i的位置
        if (j < arr.length) {
            let tmp = arr[j]
            for (let idx = j; idx > i; --idx) {
                arr[idx] = arr[idx-1]
            }
            arr[i++] = tmp
        } else {
            break
        }
    }
    return arr
}
