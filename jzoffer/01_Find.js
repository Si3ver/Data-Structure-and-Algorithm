// 1. 二维数组中的查找
function Find(target, array)
{
    if (!array.length) return false
    const rows = array.length, cols = array[0].length
    let i = 0, j = cols - 1;
    while (i < rows && j >= 0) {
        if (array[i][j] === target) return true;
        if (array[i][j] < target) {
            ++i
        } else {
            --j
        }
    }
    return false
}