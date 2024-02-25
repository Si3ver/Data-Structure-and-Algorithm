/*
查找弹幕中的某个时间点

目前视频网站都支持了弹幕 假设一个视频有很多的弹幕 并且格式定义如下:\[{time: ..., content: ...}\]
那么如何快速定位到某个时间点的弹幕？
*/

// 思路： 弹幕时刻列表 arr = [t1, t2, t3]    targetTime -> 排序后，二分查找

function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    if (target == arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

// ----
console.log(binarySearch([20, 24, 29, 30, 31, 38, 39, 55], 39));
console.log(binarySearch([20, 24, 29, 30, 31, 38, 39, 55], 40));
