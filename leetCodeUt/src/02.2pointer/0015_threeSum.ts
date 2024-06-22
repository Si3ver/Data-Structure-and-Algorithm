

// 思路：先排序，然后双指针夹逼
function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];
  nums.sort((x, y) => x - y);
  for (let i = 0; i < nums.length - 2; ++i) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let l = i + 1, r = nums.length - 1;
      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];
        if (sum === 0) {
          res.push([nums[i], nums[l++], nums[r--]]);
          while (l < r && nums[l] === nums[l-1])  ++l; // 去重
          while (l < r && nums[r] === nums[r+1])  --r; // 去重
        } else if (sum > 0) {
          --r;
        } else {
          ++l;
        }
      }
    }
  }
  return res;
};

export {threeSum}
