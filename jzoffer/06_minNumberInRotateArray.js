function minNumberInRotateArray(rotateArray)
{
    if (!rotateArray.length) return 0
    let lo = 0, hi = rotateArray.length - 1
    while (lo < hi) {
        let mi = lo + ((hi - lo)>>1)
        if (rotateArray[mi] === rotateArray[hi]) {
            hi = hi - 1
        } else if (rotateArray[mi] > rotateArray[hi]) {
            lo = mi + 1
        } else {
            hi = mi
        }
    }
    return rotateArray[lo]
}