// 关键点：extends 和 infer 的使用
{
  type MyReturnType<F> = F extends (...args: any) => infer R ? R : never;

  // ---- test
  type Foo1 = () => { a: string };
  type Foo2 = () => {};

  type RTF1 = ReturnType<Foo1>;
  type RTF2 = ReturnType<Foo2>;

  type MyRTF1 = MyReturnType<Foo1>;
  type MyRTF2 = MyReturnType<Foo2>;
}
