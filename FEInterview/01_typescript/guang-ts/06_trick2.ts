// 重新构造做变换
{
  type ttt = Promise<number>;
  type GetValueType<P> = P extends Promise<infer Value> ? Value : never;

  // test
  type res = GetValueType<ttt>;
}


// ------------------------------ 1. 数组 ------------------------------
{
  type Push<Arr extends unknown[], Ele> = [...Arr, Ele];

  // test
  type res = Push<[1, 2, 3], 4>;
}

{
  type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr];

  // test
  type res = Unshift<[1, 2, 3], 4>;
}

{
  type Zip<One extends unknown[], Two extends unknown[]> =
    One extends [infer OneFirst, ...infer OneRest]
      ? Two extends [infer TwoFirst, ...infer TwoRest]
        ? [[OneFirst, TwoFirst], ...Zip<OneRest, TwoRest>] : [] // 递归
        : [];

  // test
  type tuple1 = [1, 2, 3, 4, 5, 6, 7, 8];
  type tuple2 = ['TypeScript', 'JavaScript', 'Node.js', 'WebAssembly'];
  type res = Zip<tuple1, tuple2>;
}

// ------------------------------ 2. 字符串 ------------------------------
{

}

// ------------------------------ 3. 函数 ------------------------------
{

}

// ------------------------------ 4. 索引类型 ------------------------------
{

}
