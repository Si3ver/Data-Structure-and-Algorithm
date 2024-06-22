import { threeSum } from "./0015_threeSum";

describe("module threeSum", () => {
  test("case 1", () => {
    const arr = [-1, 0, 1, 2, -1, -4];
    expect(threeSum(arr)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test("case 2", () => {
    const arr = [0, 1, 1];
    expect(threeSum(arr)).toEqual([]);
  });

  test("case 3", () => {
    const arr = [0, 0, 0];
    expect(threeSum(arr)).toEqual([[0, 0, 0]]);
  });
});
