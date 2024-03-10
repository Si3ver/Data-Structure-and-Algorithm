/*
实现 Union2Intersection

Union2Intersection<T>，正如起名所述，是将 联合类型 转换成 交叉类型的类型函数
请完成 Union2Intersection 方法

type Union2Intersection<U> = ...

type A = { name: string }
type B = { age: number }
type R = Union2Intersection<A | B>
     ^? = A & B
*/
{
  type Union2Intersection<U> =
    (
      U extends unknown // 形成 Naked Type
        ? ((u: U) => unknown)
        : never
    ) extends (
      (i: infer I) => unknown
    ) // 满足 Distributive Condition Type
      ? I
      : never

  // ---- test case ----
  type AA = { name: string }
  type BB = { age: number }
  type RES = Union2Intersection<AA | BB>  //     ^? = A & B

  // inst
  // const res: RES = {};
}
