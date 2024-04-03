import { inorderTraversal as rec } from './0094_inorderTraversal_rec';
import { inorderTraversal } from './0094_inorderTraversal';

describe('[easy] inorderTraversal_rec', () => {
  /**
   *   1
   *     \
   *      2
   *     /
   *    3
   */
  test('case 1', () => {
    const tree = {
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
    };
    const result1 = rec(tree);
    const result2 = inorderTraversal(tree);
    expect(result1).toEqual([1, 3, 2]);
    expect(result2).toEqual([1, 3, 2]);
  });

  test('case 2', () => {
    const result1 = rec(null);
    const result2 = inorderTraversal(null);
    expect(result1).toEqual([]);
    expect(result2).toEqual([]);
  });

  /**
   *   1
   */
  test('case 3', () => {
    const tree = {
      val: 1,
      left: null,
      right: null,
    };
    const result1 = rec(tree);
    const result2 = inorderTraversal(tree);
    expect(result1).toEqual([1]);
    expect(result2).toEqual([1]);
  });
});
