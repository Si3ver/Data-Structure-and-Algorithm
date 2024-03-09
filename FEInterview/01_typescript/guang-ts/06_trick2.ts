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
// 内置高级类型: Uppercase、 Lowercase、 Capitalize、 Uncapitalize
{
  type CapitalizeStr<Str extends string> =
    Str extends `${infer First}${infer Rest}`
      ? `${Uppercase<First>}${Rest}`
      : Str;

  // test
  type res1 = CapitalizeStr<'typescript'>;
}

{
  //❎ ? `${Capitalize<Left>}${CamelCase<Rest>}`
  // 递归调用
  type CamelCase<Str extends string> =
    Str extends `${infer Left}_${infer Right}${infer Rest}`
      ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
      : Str;

  // test
  type res1 = CamelCase<'aaa_bbb_ccc'>; // expect => aaaBbbCcc
}

{
  type DropSubStr<Str extends string, SubStr extends string> =
    Str extends `${infer Prefix}${SubStr}${infer Suffix}`
      ? DropSubStr<`${Prefix}${Suffix}`, SubStr>
      : Str;

  // test
  type res1 = DropSubStr<'TypeScript~~~', '~'>;
  type res2 = DropSubStr<'TypeScript~~~JavaScript', '~'>;
  type res3 = DropSubStr<'T～ype~~S  cript', '~'>;
}

// ------------------------------ 3. 函数 ------------------------------
{

}

// ------------------------------ 4. 索引类型 ------------------------------
{
  // 通用写法（公式） -- as
  type Mapping<Obj extends object> = {
    [Key in keyof Obj]: Obj[Key];
  };

  // test
  type User = {
    readonly id: string;
    name: string;
    age?: number;
  };
  type res1 = Mapping<User>;
}

{
  type UppercaseKey<Obj extends Record<string, any>> = {
    [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key];
  }

  // test
  type User = {
    id: string;
    name: string;
    age: number;
  };
  type res1 = UppercaseKey<User>;
}
