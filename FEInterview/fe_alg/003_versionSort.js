/**
  versions是一个项目的版本号列表，因多人维护，不规则
  ``` javascript
  var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']
  ```
  要求从小到大排序，注意'1.45'比'1.5'大
  ``` javascript
  var sorted=['1.5','1.45.0','3.3.3.3.3.3','6']
  ```

  * 类似 leetcode 题目
  * https://leetcode.cn/problems/compare-version-numbers/description/
  * 比较版本号
  * medium
 */

function sortVersion(arr) {
  return arr.sort((a, b) => {
    const arrA = a.split(".");
    const arrB = b.split(".");
    const m = arrA.length, n = arrB.length;

    for (let i = 0; i < m || i < n; i++) {
      if (arrA[i] === undefined) {
        return -1;
      } else if (arrB[i] === undefined) {
        return 1;
      } else if (parseInt(arrA[i]) === parseInt(arrB[i])) {
        continue;
      } else {
        return parseInt(arrA[i]) - parseInt(arrB[i]);
      }
    }
  });
}

// ---- test case ----
console.log(sortVersion(["1.5.1", "1.45.0", "1.5", "6", "3.3.3.3.3.3.3"])); // [ '1.5', '1.5.1', '1.45.0', '3.3.3.3.3.3.3', '6' ]
