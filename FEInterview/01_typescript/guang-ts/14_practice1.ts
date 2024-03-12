// ------------------------------ 连字符 <--> 驼峰 ------------------------------
{
  type KebabCaseToCamelCase<Str extends string> =
    Str extends `${infer First}_${infer Rest}`
      ? `${First}${KebabCaseToCamelCase<Capitalize<Rest>>}`
      : Str;

  // test
  type Res1 = KebabCaseToCamelCase<"babel_plugin_istanbul">;
}

{
  type CamelCaseToKebabCase<Str extends string> =
    Str extends `${infer First}${infer Rest}`
      ? First extends Lowercase<First> // ! 判断大小写，比较 trick
        ? `${First}${CamelCaseToKebabCase<Rest>}`
        : `_${Lowercase<First>}${CamelCaseToKebabCase<Rest>}`
      : Str;

  // test
  type Res1 = CamelCaseToKebabCase<"babelPluginIstanbul">;
}

// ------------------------------ chunk ------------------------------
{
  type Chunk<
    Arr extends unknown[],
    Size extends number,
    CurArr extends unknown[] = [], // 一维数组
    Result extends unknown[] = [] // 二维数组
  > = Arr extends [infer First, ...infer Rest]
    ? CurArr["length"] extends Size
      ? Chunk<Rest, Size, [First], [...Result, CurArr]>
      : Chunk<Rest, Size, [...CurArr, First], Result>
    : [...Result, CurArr];

  // test
  type Res1 = Chunk<[1, 2, 3, 4, 5], 3>;
  type Res2 = Chunk<[1, 2, 3, 4, 5, 6], 3>;
}

// ------------------------------ DeepCamelize ------------------------------
{
  type KebabCaseToCamelCase<Str extends string> =
    Str extends `${infer First}_${infer Rest}`
      ? `${First}${KebabCaseToCamelCase<Capitalize<Rest>>}`
      : Str;

  type CamelizeArr<Arr> = Arr extends [
    infer First extends Record<string, any>,
    ...infer Rest
  ]
    ? [DeepCamelize<First>, ...CamelizeArr<Rest>]
    : [];

  type DeepCamelize<Obj extends Record<string, any>> = Obj extends unknown[]
    ? CamelizeArr<Obj>
    : {
        [Key in keyof Obj as KebabCaseToCamelCase<Key & string>]: DeepCamelize<
          Obj[Key]
        >;
      };

  // test
  type Obj = {
    aaa_bbb: string;
    bbb_ccc: [
      {
        ccc_ddd: string;
      },
      {
        ddd_eee: string;
        eee_fff: {
          fff_ggg: string;
        };
      }
    ];
  };
  type Res = DeepCamelize<Obj>;
  /** @expect
  {
    aaaBbb: string;
    bbbCcc: [
      {
        cccDdd: string;
      },
      {
        dddEee: string;
        eeeFff: {
          fffGgg: string;
        };
      }
    ];
  };*/
}

// ------------------------------ AllKeyPath ------------------------------
{
  type AllKeyPath<Obj extends Record<string, any>> = {
    [
      Key in keyof Obj
    ]: Key extends string
      ? Obj[Key] extends Record<string, any>
        ? Key | `${Key}.${AllKeyPath<Obj[Key]>}`
        : Key
      : never
  }[keyof Obj];

  // type AllKeyPath<Obj extends Record<string, any>> = {
  //   [Key in keyof Obj]: Key extends string
  //     ? Obj[Key] extends Record<string, any>
  //       ? Key | `${Key}.${AllKeyPath<Obj[Key]>}`
  //       : Key
  //     : never;
  // }[keyof Obj];

  //
  // test
  type Obj = {
    a: {
      b: {
        b1: number;
        b2: string;
      };
      c: {
        c1: boolean;
        c2: "ccc";
      };
    };
  };
  type Res = AllKeyPath<Obj>;
}

// ------------------------------ Defaultize ------------------------------
