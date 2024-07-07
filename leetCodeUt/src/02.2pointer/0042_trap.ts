export function trap(height: number[]): number {
  const n = height.length;
  if (n < 3) return 0;

  let left = 0, right = n - 1, maxL = 0, maxR = 0, res = 0;
  while (left < right) {
    if (height[left] <= height[right]) {
      maxL = Math.max(maxL, height[left]);
      res += maxL - height[left++]
    } else {
      maxR = Math.max(maxR, height[right]);
      res += maxR - height[right--];
    }
  }
  return res;
};
