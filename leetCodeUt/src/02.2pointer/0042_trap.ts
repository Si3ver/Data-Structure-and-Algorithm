export function trap(height: number[]): number {
  const n = height.length;
  if (n < 3) return 0;

  let left = 0, right = n - 1, maxL = 0, maxR = 0, ans = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      maxL = Math.max(maxL, height[left]);
      ans += maxL - height[left++];
    } else {
      maxR = Math.max(maxR, height[right]);
      ans += maxR - height[right--];
    }
  }
  return ans;
};
