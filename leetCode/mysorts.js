// 原址冒泡排序 稳定
let bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; --i) {
        for(let j = 0; j < i; ++j) {
            if(arr[j] > arr[j+1]){
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }
    return arr
}
// 原址选择排序 不稳定
let selectSort = (arr) => {
    for (let i = 0, il = arr.length - 1; i < il; ++i) {
        let minIdx = i
        for (let j = i + 1, jl = arr.length; j < jl; ++j) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j
            }
        }
        if (minIdx !== i) {
            let tmp = arr[minIdx]
            arr[minIdx] = arr[i]
            arr[i] = tmp
        }
    }
    return arr
}
// 原址插入排序 稳定
let insertSort = (arr) => {
    for (let i = 1, il = arr.length; i < il; ++i) {
        let tmp = arr[i], j
        for (j = i - 1; j >= 0 && arr[j] > tmp; --j) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = tmp
    }
    return arr
}
// 原址快排 不稳定
let partition = (arr, left, right) => {
    let pivot = arr[left]
    while (left < right) {
        while (left < right && arr[right] > pivot) --right
        if (left < right) arr[left] = arr[right]
        while (left < right && arr[left] < pivot) ++left
        if (left < right) arr[right] = arr[left]
    }
    arr[left] = pivot
    return left
}
let quickSort_recu = (arr, left, right) => {
    if (left >= right) return
    let pivotIdx = partition(arr, left, right)
    quickSort_recu(arr, left, pivotIdx - 1)
    quickSort_recu(arr, pivotIdx + 1, right)
    return arr
}
let quickSort_iter = (arr, left, right) => {
    let stack = [left, right]
    while (stack.length) {
        let right = stack.pop(), left = stack.pop()
        let pivotIdx = partition(arr, left, right)
        if (pivotIdx - 1 > left) {
            stack.push(left)
            stack.push(pivotIdx - 1)
        }
        if (pivotIdx + 1 < right) {
            stack.push(pivotIdx + 1)
            stack.push(right)
        }
    }
    return arr
}
// --- test ---
console.log(bubbleSort([5, 3, 9, 1, 8, 34, 12]))
console.log(selectSort([5, 3, 9, 1, 8, 34, 12]))
console.log(insertSort([5, 3, 9, 1, 8, 34, 12]))
console.log(quickSort_recu([5, 3, 9, 1, 8, 34, 12], 0, [5, 3, 9, 1, 8, 34, 12].length-1))
console.log(quickSort_iter([5, 3, 9, 1, 8, 34, 12], 0, [5, 3, 9, 1, 8, 34, 12].length-1))
