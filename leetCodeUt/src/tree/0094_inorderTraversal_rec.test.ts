import { inorderTraversal } from './0094_inorderTraversal_rec';

describe('[easy] inorderTraversal_rec', () => {
  /**
   *   1
   *     \
   *      2
   *     /
   *    3
   */
  test('case 1', () => {
    const result = inorderTraversal({
      val: 1,
      left: null,
      right: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: null,
      }
    });
    expect(result).toEqual([1, 3, 2]);
  });

  test('case 2', () => {
    const result = inorderTraversal(null);
    expect(result).toEqual([]);
  });

  /**
   *   1
   */
  test('case 3', () => {
    const result = inorderTraversal({
      val: 1,
      left: null,
      right: null,
    });
    expect(result).toEqual([1]);
  });
});
