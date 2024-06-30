
export function trap(height: number[]): number {
  const n = height.length;
  if (n < 3) return 0;
  let left = 0;
  let right = n - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let ans = 0;
  while (left < right) {
    if (height[left] <= height[right]) { // 双指针，始终矮的一侧往里靠
      maxLeft = Math.max(maxLeft, height[left]);
      ans += maxLeft - height[left];
      ++left;
    } else {
      maxRight = Math.max(maxRight, height[right]);
      ans += maxRight - height[right];
      --right;
    }
  }
  return ans;
}
