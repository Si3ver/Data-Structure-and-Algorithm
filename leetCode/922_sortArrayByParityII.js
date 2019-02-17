// 按奇偶排序数组 II
// 1. 非原址排序，开辟新数组会耗内存。
var sortArrayByParityII1 = function(A) {
    let r = [], even = 0, odd = 1
    for (item of A) {
        if (item & 1) {
            r[odd] = item
            odd += 2
        } else {
            r[even] = item
            even += 2
        }
    }
    return r
};
// 2. 原址排序。 O(n)
var sortArrayByParityII = function(A) {
    for (let i = 0, j = 1, il = A.length - 1; i < il; i = i + 2) {
        if (A[i] & 1) {                 // 偶数位置的奇数
            while (A[j] & 1) j = j + 2  // 往后找一个奇数位置的偶数
            let tmp = A[i]
            A[i] = A[j]
            A[j] = tmp
        }
    }
    return A
};

// --- test ---
console.log(sortArrayByParityII1([4,2,5,7,3,9,6,6]))
console.log(sortArrayByParityII2([4,2,5,7,3,9,6,6]))
