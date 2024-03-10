// 数组长度做计数
{
  // test
  type res1 = [unknown]['length'];
  type res2 = [unknown, unknown]['length'];
}

// ------------------------------ 1. 加减乘除 ------------------------------
{
  type BuildArray<
      Length extends number,
      Ele = unknown,
      Arr extends unknown[] = [],
    > = Arr['length'] extends Length
      ? Arr
      : BuildArray<Length, Ele, [...Arr, Ele]>;

  {
    //
    type Add<
      Num1 extends number,
      Num2 extends number,
    > = [...BuildArray<Num1>, ...BuildArray<Num2>]['length'];

    // test
    type res1 = Add<3, 4>;
    type res2 = Add<3, 0>;
    // type res3 = Add<3, -1>;
  }

  {
    //
    type Subtract<
      Num1 extends number,
      Num2 extends number,
    > =
      BuildArray<Num1> extends
        [
          ...arr1: BuildArray<Num2>,
          ...arr2: infer Rest,
        ]
          ? Rest['length']
          : never;

    // test
    type res1 = Subtract<10, 7>;
    type res2 = Subtract<10, 0>;

    {
      // 递归累加 -- 使用 BuildArray + Subtract
      type Multiply<
        Num1 extends number,
        Num2 extends number,
        ResArr extends unknown[] = [],
      > =
        Num2 extends 0
          ? ResArr['length']
          : Multiply<Num1, Subtract<Num2, 1>, [...BuildArray<Num1>, ...ResArr]>;

      // test
      type res1 = Multiply<3, 4>;
      type res2 = Multiply<3, 0>;
    }


    {
      // 递归累减 -- 使用 BuildArray + Subtract
      type Divide<
        Num1 extends number,
        Num2 extends number,
        CountArr extends unknown[] = [],
      > =
        Num1 extends 0
          ? CountArr['length']
          : Divide<Subtract<Num1, Num2>, Num2, [unknown, ...CountArr]>;

      // test
      type res1 = Divide<12, 3>;
      type res2 = Divide<10, 7>;
    }
  }
}

// ------------------------------ 2. 计数 ------------------------------
{
  type StrLen<
    Str extends string,
    CountArr extends unknown[] = [],
  > = Str extends `${string}${infer Rest}`
    ? StrLen<Rest, [...CountArr, unknown]>
    : CountArr['length'];

  // test
  type res1 = StrLen<'abcd'>;
  type res2 = StrLen<''>;
}

{
  type GreaterThan<
    Num1 extends number,
    Num2 extends number,
    CountArr extends unknown[] = [],
  > =
    Num1 extends Num2
      ? false // 相等
      : CountArr['length'] extends Num2
        ? true // 数组长度先遇到 Num2，说明 Num2 更小
        : CountArr['length'] extends Num1
          ? false // 数组长度先遇到 Num1，说明 Num1 更小
          : GreaterThan<Num1, Num2, [...CountArr, unknown]>; // 数组长度 +1

  // test
  type res1 = GreaterThan<9, 8>;
  type res2 = GreaterThan<8, 9>;
  type res3 = GreaterThan<8.1, 9>; // 不支持判断小数
}

{
  type FibonacciLoop<
    PrevArr extends unknown[], // 之前累计的长度
    CurrArr extends unknown[] = [], // 当前长度
    IndexArr extends unknown[] = [], // 索引，长度每次自增 1
    Index extends number = 1,
  > = IndexArr['length'] extends Index
    ? CurrArr['length']
    : FibonacciLoop<
        CurrArr,
        [...PrevArr, ...CurrArr],
        [...IndexArr, unknown],
        Index
      >;

  type Fibonacci<Index extends number> = FibonacciLoop<[1], [], [], Index>;

  // test
  type res1 = Fibonacci<1>; // 1
  type res2 = Fibonacci<2>; // 1
  type res3 = Fibonacci<3>; // 2
  type res4 = Fibonacci<4>; // 3
  type res5 = Fibonacci<5>; // 5
  type res6 = Fibonacci<6>; // 8
  type res7 = Fibonacci<7>; // 13
  type res8 = Fibonacci<8>; // 21
}
