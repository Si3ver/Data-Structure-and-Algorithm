// 模式匹配做提取
// ------------------------------ 1. 数组类型 ------------------------------
{
  type GetFirst<T extends unknown[]> = T extends [infer First, ...unknown[]] ? First : never;

  // test
  type res1 = GetFirst<[1, 2, 3]>;
  type res2 = GetFirst<[]>;
}

{
  type GetLast<T extends unknown[]> = T extends [...unknown[], infer Last] ? Last : never;

  // test
  type res1 = GetLast<[1, 2, 3]>;
  type res2 = GetLast<[]>;
}

{
  type PopArr<T extends unknown[]> =
    T extends [] ? []
      : T extends [...infer Rest, unknown] ? Rest
      : never;

  // test
  type res1 = PopArr<[]>;
  type res2 = PopArr<[1]>;
  type res3 = PopArr<[1, 2, 3]>;
}

{
  type ShiftArr<T extends unknown[]> =
    T extends [] ? []
      : T extends [unknown, ...infer Rest] ? Rest
      : never;

  // test
  type res1 = ShiftArr<[]>;
  type res2 = ShiftArr<[1]>;
  type res3 = ShiftArr<[1, 2, 3]>;
}

// ------------------------------ 2. 字符串类型 ------------------------------
{
  type StartsWith<Str extends string, Prefix extends string> =
    Str extends `${Prefix}${string}` ? true : false;

  // test
  type res1 = StartsWith<'TypeScript', 'Type'>;
  type res2 = StartsWith<'TypeScript', 'Any'>;
}

{
  type ReplaceStr<
    Str extends string,
    From extends string,
    To extends string,
  > = Str extends `${infer Prefix}${From}${infer Suffix}`
    ? `${Prefix}${To}${Suffix}` : Str;

  // test
  type res1 = ReplaceStr<'TypeScript', 'Type', 'Any'>;
  type res2 = ReplaceStr<'TypeScript', 'Python', 'Any'>;
}

{
  type TrimRight<Str extends string> =
    Str extends `${infer Rest}${' ' | '\n' | '\t'}`
      ? TrimRight<Rest> : Str;

  type TrimLeft<Str extends string> =
    Str extends `${' ' | '\n' | '\t'}${infer Rest}`
      ? TrimLeft<Rest> : Str;

  type Trim<Str extends string> = TrimLeft<TrimRight<Str>>;

  // test
  type res = Trim<'       zwl  is   so cool!    '>;
}

// ------------------------------ 3. 函数 ------------------------------


// ------------------------------ 4. 构造器 ------------------------------


// ------------------------------ 5. 索引类型 ------------------------------


