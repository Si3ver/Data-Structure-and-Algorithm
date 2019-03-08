// 利用快排和二分思想
let partition = (arr, left, right) => {
    let pivot = arr[left]
    while (left < right) {
        while (left < right && arr[right] >= pivot) --right
        if (left < right) arr[left] = arr[right]
        while (left < right && arr[left] <= pivot) ++left
        if (left < right) arr[right] = arr[left]
    }
    arr[left] = pivot
    return left
}

function GetLeastNumbers_Solution(arr, k)
{
    if (k > arr.length) return []
    let pivotIdx = partition(arr, 0, arr.length-1)
    if (k === pivotIdx) {
        return arr.slice(0, pivotIdx).sort()
    } else if (k === pivotIdx + 1) {
        return arr.slice(0, pivotIdx + 1).sort()
    } else if (k > pivotIdx + 1) {
        return arr.slice(0, pivotIdx+1).concat(GetLeastNumbers_Solution(arr.slice(pivotIdx+1, arr.length), k-pivotIdx-1)).sort()
    } else {
        return GetLeastNumbers_Solution(arr.slice(0, pivotIdx), k).sort()
    }
}

console.log(GetLeastNumbers_Solution([4,5,1,6,2,7,3,8], 4))
