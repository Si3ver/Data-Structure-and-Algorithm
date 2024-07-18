export function maxSlidingWindow(nums: number[], k: number): number[] {
  const wind: number[] = [], res: number[] = [];
  for (let i = 0; i < nums.length; ++i) {
    // dequeue
    if (wind.length && i - wind[0] >= k) {
      wind.shift();
    }
    // remove newer && litter
    while (wind.length && nums[i] >= nums[wind[wind.length - 1]]) {
      wind.pop();
    }
    // enque
    wind.push(i);
    // process
    if (i >= k - 1) {
      res.push(nums[wind[0]]);
    }
  }
  return res;
};
