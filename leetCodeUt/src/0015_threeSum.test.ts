import { threeSum } from "./0015_threeSum";

describe('module threeSum', () => {
  test('cases', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    expect(threeSum([0, 1, 1])).toEqual([]);
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
});
