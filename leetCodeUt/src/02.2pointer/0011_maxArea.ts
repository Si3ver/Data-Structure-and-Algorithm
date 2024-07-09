/**
 * 盛水最多的容器
 * medium
 *
 * 思路：矮的往里收才有可能让面积变大
 */

export function maxArea(height: number[]): number {
  const n = height.length;
  const getArea = (i: number, j: number) => (j - i) * Math.min(height[i], height[j]);
  let left = 0, right = n - 1, max = getArea(left, right);
  while (left < right) {
    if (height[left] <= height[right]) {
      ++left;
    } else {
      --right;
    }
    max = Math.max(max, getArea(left, right));
  }
  return max;
};
