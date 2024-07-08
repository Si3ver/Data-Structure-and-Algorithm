export function twoSum(arr: number[], target: number): number[] {
  const m = new Map(), n = arr.length;
  for (let i = 0; i < n; ++i) {
    if (m.has(arr[i])) {
      return [m.get(arr[i]), i];
    } else {
      m.set(target - arr[i], i);
    }
  }
  return [];
};
