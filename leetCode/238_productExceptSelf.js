/**
 * https://leetcode.cn/problems/product-of-array-except-self
 * 除自身以外数组的乘积
 * medium
 *
 * 思路：即当前元素 = 左边乘积 * 右边乘积
 */

var productExceptSelf = function(nums) {
  const res = [], n = nums.length;
  for (let i = 0, k = 1; i < n; ++i) {
    res.push(k);
    k *= nums[i];
  }
  for (let i = n - 1, k = 1; i >= 0; --i) {
    res[i] *= k;
    k *= nums[i];
  }
  return res;
}

// ----
console.log(productExceptSelf([1, 2, 3, 4]));
