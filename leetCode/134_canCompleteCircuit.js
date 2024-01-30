/**
 * https://leetcode.cn/problems/gas-station/
 * 加油站
 * medium
 * idx   0  1  2  3  4
 * gas   1  2  3  4  5
 * cost  3  4  5  1  2
 *
 * left           x  x
 *                3  3
 *      -2 -2 -2
 */

// O(n) O(1)  totalGas >= totalCost，则一定有解
var canCompleteCircuit = function(gas, cost) {
  let left = 0, start = 0, totalGas = 0, totalCost = 0;
  for (let i = 0; i < gas.length; ++i) {
    totalGas += gas[i];
    totalCost += cost[i];
    left += gas[i] - cost[i];
    if (left < 0) {
      left = 0;
      start = i + 1;
    }
  }
  return totalGas >= totalCost ? start : -1;
};

// ----
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));

