// 递归复用做循环
{
  // common utils
  // ! 这个实现是错误的，extends 只判断了相关性，没判断相等性
  // type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false);

  // ! 这样写才是对的
  type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
    T
  >() => T extends B ? 1 : 2
    ? true
    : false;

  {
    // test IsEqual
    type res1 = IsEqual<true, boolean>;
    type res2 = IsEqual<boolean, true>;
    type res3 = IsEqual<"123", "456">;
    type res4 = true extends boolean ? true : false;
    type res5 = boolean extends true ? true : false;
    type res6 = true & false;

    type a = IsEqual<boolean, false>;
    type b = (boolean extends false ? true : false) & true;
    type c = true | false;

    type x1 = IsEqual<1, number>;
    type x2 = IsEqual<number, 1>;
  }

  // ------------------------------ 1. Promise ------------------------------
  {
    type DeepPromiseValueType<P extends Promise<unknown>> = P extends Promise<
      infer ValueType
    >
      ? ValueType extends Promise<unknown>
        ? DeepPromiseValueType<ValueType>
        : ValueType
      : never;

    // test
    type ttt = Promise<Promise<Promise<Record<string, any>>>>;
    type res1 = DeepPromiseValueType<ttt>;
  }

  {
    type DeepPromiseValueType<T> = T extends Promise<infer ValueType>
      ? DeepPromiseValueType<ValueType>
      : T;

    // test
    type ttt = Promise<Promise<Promise<Record<string, any>>>>;
    type res1 = DeepPromiseValueType<ttt>;
  }

  // ------------------------------ 2. 数组 ------------------------------
  {
    // !!! easy
    type ReverseArr<Arr extends unknown[]> = Arr extends [
      infer First,
      ...infer Rest
    ]
      ? [...ReverseArr<Rest>, First]
      : Arr;

    // test
    type res1 = ReverseArr<[number, string, boolean]>;
    type res2 = ReverseArr<[1, 2, 3, 4, 5]>;
  }

  {
    type Includes<Arr extends unknown[], FindItem> = Arr extends [
      infer First,
      ...infer Rest
    ]
      ? IsEqual<First, FindItem> extends true
        ? true
        : Includes<Rest, FindItem>
      : false;

    // test
    type res1 = Includes<[number, string], string>;
    type res2 = Includes<[number, string], 1>;
    type res3 = Includes<[number, string], boolean>;
  }

  {
    type RemoveItem<
      Arr extends unknown[],
      Item,
      Result extends unknown[] = []
    > = Arr extends [infer First, ...infer Rest]
      ? IsEqual<First, Item> extends true
        ? RemoveItem<Rest, Item, Result> // 相等就直接进入下一轮递归
        : RemoveItem<Rest, Item, [...Result, First]> // 不相等就放进 result，并进入下一轮递归
      : Result; // 递归终止

    // test
    type rest1 = RemoveItem<[1, 2, 1, 3], 1>;
    type rest2 = RemoveItem<[string, boolean, number, boolean], true>;
    type rest3 = RemoveItem<[string, boolean, number, boolean], 2>;
  }

  {
    type BuildArray<
      Length extends number,
      Ele = unknown,
      Arr extends unknown[] = []
    > = Arr["length"] extends Length
      ? Arr
      : BuildArray<Length, Ele, [...Arr, Ele]>;

    // test
    type res1 = BuildArray<5>;
    type res2 = BuildArray<5, number>;
    type res3 = BuildArray<5, number, ["a", "b", "c"]>;
  }

  // ------------------------------ 3. 字符串 ------------------------------
  {
    type ReplaceStr<
      Str extends string,
      From extends string,
      To extends string
    > = Str extends `${infer Prefix}${From}${infer Suffix}`
      ? // ? ReplaceStr<`${Prefix}${To}${Suffix}`, From, To>
        `${Prefix}${To}${ReplaceStr<Suffix, From, To>}`
      : Str;

    // test
    type res1 = ReplaceStr<
      "I am learning TypeScript and its BuildIn Types.",
      "Type",
      "Any"
    >;
  }

  {
    type StringToUnion<Str extends string> =
      Str extends `${infer First}${infer Rest}`
        ? First | StringToUnion<Rest>
        : never;

    // test
    type res1 = StringToUnion<"TypeScript!">;
  }

  {
    type ReverseStr<Str extends string> =
      Str extends `${infer First}${infer Rest}`
        ? `${ReverseStr<Rest>}${First}`
        : Str;

    // !!! medium
    // type ReverseStr<
    //   Str extends string,
    //   Result extends string = '',
    // > = Str extends `${infer First}${infer Rest}`
    //   ? ReverseStr<Rest, `${First}${Result}`>
    //   : Result;

    // test
    type res1 = ReverseStr<"TypeScript!">;
  }

  // ------------------------------ 4. 对象 ------------------------------
  {
    // basic
    type ToReadonly<T> = {
      readonly [Key in keyof T]: T[Key];
    };

    // test
    type res = ToReadonly<{
      name: string;
      age: number;
    }>;
  }

  {
    // !! medium
    // Obj extends any 触发计算（ts 的类型只有被用到的时候才会做计算）
    type DeepReadonly<Obj extends Record<string, any>> = Obj extends any
      ? {
          readonly [Key in keyof Obj]: Obj[Key] extends object
            ? Obj[Key] extends Function
              ? Obj[Key]
              : DeepReadonly<Obj>
            : Obj[Key];
        }
      : never;

    // test
    type res = DeepReadonly<{
      a: {
        b: {
          c: {
            d: {
              e: {
                lang: "TypeScript!";
              };
              f: () => "Ts!";
            };
          };
        };
      };
    }>;
  }
}
