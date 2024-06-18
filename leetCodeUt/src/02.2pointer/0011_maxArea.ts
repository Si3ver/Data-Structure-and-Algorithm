/**
 * 盛水最多的容器
 * medium
 *
 * 思路：矮的往里收才有可能让面积变大
 */

function maxArea(height: number[]): number {
  const n = height.length;
  if (n < 2) return 0;
  let i = 0, j = n - 1;
  let max = 0;
  while (i < j) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    if (height[i] > height[j]) j--;
    else i++;
  }
  return max;
};

export {maxArea}
