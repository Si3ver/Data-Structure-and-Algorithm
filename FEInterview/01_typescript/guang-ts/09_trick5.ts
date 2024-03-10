// 联合分散可简化
//? TS 对联合类型在条件类型中使用时的特殊处理：会把联合类型的每一个元素单独传入做类型计算，最后合并

// ------------------------------ 0. 分布式条件类型 ------------------------------
{
  type UppercaseA<T extends string> =
    T extends 'a' ? Uppercase<T> : T;

  // test
  type res = UppercaseA<'a' | 'b' | 'c'>;
}

{
  type Union = 'a' | 'b' | 'c';
  type str = `${Union}~~`
}

// ------------------------------ 1. Camel case union ------------------------------
{
  type Camelcase<Str extends string> =
    Str extends `${infer Left}_${infer Char}${infer Rest}`
      ? `${Left}${Uppercase<Char>}${Camelcase<Rest>}`
      : Str;

  // test
  type res1 = Camelcase<'aa_bb_cc'>;
  type res2 = Camelcase<'aa_bb_cc' | 'dd_ee_ff' | 'test' | ''>;

  {
    // 参数为数组
    type CamelcaseArr<
      Arr extends unknown[],
    > = Arr extends [infer Item, ...infer RestArr]
      ? [Camelcase<Item & string>, ...CamelcaseArr<RestArr>]
      : [];

    // test
    type res3 = CamelcaseArr<['aa_bb_cc', 'dd_ee_ff', 'test' | '']>;
  }
}

// ------------------------------ 2. Is Union ------------------------------
{
  type IsUnion<A, B = A> =
    A extends A // 触发分布式条件类型，让 A 的每个类型单独传入
      ? [B] extends [A]
        ? false // B 是联合类型整体，而 A 是单个类型
        : true
      : never;

  // test
  type res1 = IsUnion<'a' | 'b'>;
  type res2 = IsUnion<'a'>;
  type res3 = IsUnion<['a', 'b']>;
}

{
  type TestUnion<A, B = A> = A extends A ? { a: A, b: B } : never;

  // 条件类型中如果左边的类型是联合类型，会把每个元素单独传入做计算，而右边不会
  type res1 = TestUnion<'a' | 'b' | 'c'>;
}

// ------------------------------ 3. BEM ------------------------------
// bem 是 css 命名规范，传入 block、element、modifier，返回构造出的 class 名 block__element--modifier
{
  // ! trick 用 number 作为 array 遍历索引
  type BEM<
    Block extends string,
    Element extends string[],
    Modifiers extends string[],
  > = `${Block}__${Element[number]}--${Modifiers[number]}`;

  // test
  type res = BEM<'box', ['top', 'bottom'], ['warning', 'success']>;
}

// ------------------------------ 4. All Combinations ------------------------------
{
  type Combination<A extends string, B extends string> =
    | A
    | B
    | `${A}${B}`
    | `${B}${A}`;

  // test
  type res = Combination<'A', 'B'>;

  {
    type AllCombination<A extends string, B extends string = A> =
      A extends A
        ? Combination<A, AllCombination<Exclude<B, A>>>
        : never;

    // test
    type res = AllCombination<'A' | 'B' | 'C'>;
  }
}
