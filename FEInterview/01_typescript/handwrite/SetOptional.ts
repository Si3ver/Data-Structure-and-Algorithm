// 实现要点：Partial
{
  type SetOptional<T, K extends keyof T> =
    Omit<T, K>
    & Partial<Pick<T, K>>
  ;

  // test
  type Foo = {
    a: number;
    b?: string;
    c: boolean;
  };
  type Test = SetOptional<Foo, "a" | "b">;
  const test: Test = {
    c: true,
  };
}
