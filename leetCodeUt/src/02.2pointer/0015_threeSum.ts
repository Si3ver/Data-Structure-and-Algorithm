// 思路：先排序，然后双指针夹逼
export function threeSum(nums: number[]): number[][] {
  const res: [number, number, number][] = [], n = nums.length;
  nums.sort((x, y) => x - y);
  for (let i = 0; i < n - 2; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left++], nums[right--]]);
        while (left < right && nums[left] === nums[left - 1]) ++left;
        while (left < right && nums[right] === nums[right + 1]) --right;
      } else if (sum > 0) {
        --right;
      } else {
        ++left;
      }
    }
  }
  return res;
};
