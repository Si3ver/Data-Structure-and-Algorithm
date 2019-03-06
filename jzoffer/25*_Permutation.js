function Permutation(str)
{
    if (!str.length) return []
    let arr = str.split(''), res = []
    let help = (arr, idx) => {
        if (idx > arr.length - 1) {
            res.push(arr.join(''))
        } else {
            for (let i = idx; i < arr.length; ++i) {
                let tmp = arr[i]
                arr[i] = arr[idx]
                arr[idx] = tmp
                help(arr, idx+1)
                tmp = arr[i]
                arr[i] = arr[idx]
                arr[idx] = tmp
            }
        }
    }
    help(arr, 0)
    return [...new Set(res)].sort()
}

console.log(Permutation('abc'))
