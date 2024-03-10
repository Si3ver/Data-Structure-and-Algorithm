// 特殊类型要记清

// ------------------------------ any ------------------------------
{
  // ! any 类型与任何类型的交叉都是 any，也就是 1 & any 结果是 any
  type IsAny<T> = 'a' extends ('a' & T) ? true : false;

  // test
  type res1 = IsAny<any>;
  type res2 = IsAny<number>;
  type res3 = IsAny<boolean>;
  type res4 = IsAny<string>;
  type res5 = IsAny<'abc'>;
  type res6 = IsAny<unknown>;
  type res7 = IsAny<never>;
}

// ------------------------------ equal ------------------------------

{
  type IsEqual<A, B> =
    (<T>() => T extends A ? 1 : 2) extends
    (<T>() => T extends B ? 1 : 2)
      ? true
      : false;

  // test
  type res1 = IsEqual<boolean, boolean>;
  type res2 = IsEqual<true, boolean>;
  type res3 = IsEqual<false, boolean>;
  type res4 = IsEqual<false, false>;
  type res5 = IsEqual<false, true>;

  type res10 = IsEqual<number, number>;
  type res11 = IsEqual<-1, number>;
  type res12 = IsEqual<0, number>;
  type res13 = IsEqual<8, number>;
  type res14 = IsEqual<8, 8>;
}

// ------------------------------ union ------------------------------
{
  type IsUnion<A, B = A> =
    A extends A
      ? [B] extends [A]
        ? false
        : true
      : never;

  // test
  type res1 = IsUnion<'a' | 'b'>;
}

// ------------------------------ never ------------------------------

{
  // 如果条件类型左边是类型参数，并且传入的是 never，那么直接返回 never
  type TestNever<T> = T extends number ? 1 : 2;

  // test
  type test1 = TestNever<never>; // never
  type test2 = TestNever<number>; // 1
  type test3 = TestNever<1>; // 1
  type test4 = TestNever<'abc'>; // 2
  type test5 = TestNever<string>; // 2
  type test6 = TestNever<any>; // 1 | 2
}
{
  type IsNever<T> = [T] extends [never] ? true : false;

  // test
  type res1 = IsNever<never>;
  type res2 = IsNever<number>;
  type res3 = IsNever<1>;
  type res4 = IsNever<'abc'>;
  type res5 = IsNever<string>;
}

// ------------------------------ tuple ------------------------------
{
  // ! 元组类型的 length 是数字字面量
  type res1 = [number, string, boolean]['length']; // 3
  // ! 数组的 length 是 number。
  type res2 = string[]['length']; // number
}

{
  // util
  type NotEqual<A, B> =
    (<T>() => T extends A ? 1 : 2) extends
    (<T>() => T extends B ? 1 : 2)
      ? false
      : true;

  type IsTuple<T> =
    T extends [...params: infer Eles]
      ? NotEqual<Eles['length'], number>
      : false;

  // test
  type res1 = IsTuple<[number, string]>; // true
  type res2 = IsTuple<string[]>; // false
}

// ------------------------------ union to intersection ------------------------------
// 父类型(更抽象) A | B   子类型(更具体) A & B
// 逆变(抽象 -> 具体 contravariant)：允许父类型赋值给子类型
// 协变(具体 -> 抽象 covariant)：允许子类型赋值给父类型
{
  let a: string;
  a = '123'; // 协变

  function sayHello(name: string) {
    return `Hello, ${name}`;
  }
  sayHello('william');
}

{
  type UnionToIntersection<U> =
    (
      U extends unknown // 触发 distributive 性质
        ? (x: U) => unknown // 把 U 作为参数构造个 function，便于匹配 U 的类型 R
        : never
    ) extends
    (x: infer R) => unknown
      ? R
      : never;

  // test
  type res1 = UnionToIntersection<'a' | 'b'>;
  type res2 = UnionToIntersection<{
    name: 'wl',
  } | {
    age: 18,
  }>
}
