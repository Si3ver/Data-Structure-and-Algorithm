// 类型操作顺口溜

// ------------------------------ parse query string ------------------------------
{
  type ParseQueryString<Str extends string> =
    Str extends `${infer First}&${infer Rest}`
      ? MergeParams<ParseParam<First>, ParseQueryString<Rest>>
      : ParseParam<Str>;

  type ParseParam<Str extends string> =
    Str extends `${infer Key}=${infer Value}`
      ? {
        [K in Key]: Value;
      }
      : {};
  //
  type TestParseParam1 = ParseParam<'a=1'>;

  type MergeParams<
      OneParam extends Record<string, any>,
      OtherParam extends Record<string, any>,
  > = {
    [Key in keyof OneParam | keyof OtherParam]:
      Key extends keyof OneParam
        ? Key extends keyof OtherParam
          ? MergeValues<OneParam[Key], OtherParam[Key]>
          // ? OtherParam[Key]
          : OneParam[Key]
        : Key extends keyof OtherParam
          ? OtherParam[Key]
          : never;
  }

  type MergeValues<One, Other> =
    One extends Other
      ? One
      : Other extends unknown[]
        ? [One, ...Other]
        : [One, Other]

  // test
  type Res1 = ParseQueryString<'a=1&b=2&c=3'>;
  type Res2 = ParseQueryString<'a=1'>;
  type Res3 = ParseQueryString<'a=1&b=2&a=3'>;

}
