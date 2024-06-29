import { maxArea } from "../0011_maxArea";

describe('module maxArea', () => {
  test('case 1', () => {
    const arr = [1,8,6,2,5,4,8,3,7];
    expect(maxArea(arr)).toEqual(49);
  });

  test('case 2', () => {
    const arr = [1, 1];
    expect(maxArea(arr)).toEqual(1);
  });
});
