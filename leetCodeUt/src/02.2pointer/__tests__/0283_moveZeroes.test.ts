import { moveZeroes } from "../0283_moveZeroes";

describe('module moveZeroes', () => {
  test('case 1', () => {
    const arr = [0, 1, 0, 3, 12];
    moveZeroes(arr);
    expect(arr).toEqual([1, 3, 12, 0, 0]);
  });

  test('case 2', () => {
    const arr = [0];
    moveZeroes(arr);
    expect(arr).toEqual([0]);
  });
});
