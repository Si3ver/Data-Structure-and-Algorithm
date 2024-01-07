/**
 * https://leetcode.cn/problems/search-a-2d-matrix/description
 * 搜索二维矩阵
 *
 * 考点：二分查找
 *
 * j\i  0  1  2  3
 *  0   1  3  5  7
 *  1  10 11 16 20
 *  2  23 30 34 60
 */

var searchMatrix = function(A, target) {
  const getVal = (idx) => {
    const x = Math.floor(idx / n);
    const y = idx % n;
    return A[x][y];
  }

  const m = A.length, n = A[0].length;
  let lo = 0, hi = m * n - 1;
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    const val = getVal(mid);
    if (val === target) {
      return true;
    } else if (val > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return false;
}

// ---- test case ----
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));  // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)); // false
