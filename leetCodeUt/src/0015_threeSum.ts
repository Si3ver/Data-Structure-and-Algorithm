function threeSum(arr: number[]): number[][] {
  const n = arr.length;
  if (n < 3) return [];
  arr.sort((x, y) => x - y);

  const res: number[][] = [];
  for (let k = 0; k < n - 2; ++k) {
    if (k > 0 && arr[k] === arr[k - 1]) continue;
    let lo = k + 1, hi = n - 1;
    while (lo < hi) {
      const sum = arr[k] + arr[lo] + arr[hi];
      if (sum === 0) {
        res.push([arr[k], arr[lo], arr[hi]]);
        while(lo < hi && arr[lo] === arr[++lo]) {}
        while(lo < hi && arr[hi] === arr[--hi]) {}
      } else if (sum < 0) {
        while(lo < hi && arr[lo] === arr[++lo]) {}
      } else {
        while(lo < hi && arr[hi] === arr[--hi]) {}
      }
    }
  }
  return res;
};

export {threeSum}
