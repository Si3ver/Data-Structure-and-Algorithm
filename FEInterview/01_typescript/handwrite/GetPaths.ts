/*
实现一个 Paths 的类型函数, 返回传入类型的所有值的访问路径(以点分割)
例如 Paths<{ a: { b: string} }> 的结果为 "a" | "a.b"
限定遍历深度为 5

更多行为可以参考如下实例

请在候选人明确表明对 TS 「 比较熟悉」的情况下考察该题
由于该题属于中级题目, 可分步酌情给分
1. 知道如何遍历 (2分)
2. 知道如何递归遍历 (3分)
3. 知道如何限制遍历深度 (4分)
4. 完成编码 (5分)
*/
{
  type Paths<T, D extends unknown[] = []> = D extends { length: 5 }
    ? never
    : {
        [K in keyof T]: T[K] extends unknown[]
          ? `${K & string}.${number}` | K
          : T[K] extends object
          ? `${K & string}.${Paths<T[K], [unknown, ...D]> & string}` | K
          : K;
      }[keyof T];

  // ---- test case ----
  // 一层遍历
  type T1 = {
    a: string;
    b: string;
  };

  type t1 = Paths<T1>;
  //   ^? type t1 = "a" | "b"

  // 数组
  type T2 = {
    arr: string[];
  };
  type t2 = Paths<T2>;
  //   ^? type t2 = "arr" | `arr.${number}`

  // 多层遍历
  type T3 = {
    a: {
      b: {
        c: string;
      };
    };
  };
  type t3 = Paths<T3>;
  //   ^? type t3 = "a" | "a.b" | "a.b.c"

  // 限定深度为 5
  type T4 = {
    x: T4;
  };
  type t4 = Paths<T4>;
  //   ^? type t4 = "x" | "x.x" | "x.x.x" | "x.x.x.x" | "x.x.x.x.x"
}
