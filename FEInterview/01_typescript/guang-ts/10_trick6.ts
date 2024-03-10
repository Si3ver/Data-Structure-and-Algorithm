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

  const sayHello = (name: string) => {
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

// ------------------------------ GetOptional ------------------------------
{
  // 测试用
  type User = {
    name: string;
    age?: number;
    readonly id: string | undefined;
  };

  {
    // 按属性过滤，只保留 option 类型的
    type GetOptional<Obj extends Record<string, any>> = {
      [
        Key in keyof Obj
          as {} extends Pick<Obj, Key>
            ? Key
            : never
      ]: Obj[Key];
    }

    // test
    type res1 = GetOptional<User>;
  }

  {
    // 拆开写
    type IsOptional<Key extends keyof Obj, Obj> =
      {} extends Pick<Obj, Key> ? Key : never;

    type GetOptional<Obj extends Record<string, any>> = {
      [
        Key in keyof Obj
          as IsOptional<Key, Obj>
      ]: Obj[Key];
    }

    // test
    type res1 = GetOptional<User>;
  }
}

{
  // ! 原理：
  // 空对象可以作为可选类型的子类型
  type res1 = {} extends { age?: number } ? true : false; // true
  // 不能作为必选属性的子类型
  type res2 = {} extends { age: number } ? true : false; // false
}

// ------------------------------ GetRequired ------------------------------
{
  type IsRequired<Key extends keyof Obj, Obj> =
    {} extends Pick<Obj, Key> ? never : Key;

  type GetRequired<Obj extends Record<string, any>> = {
    [Key in keyof Obj as IsRequired<Key, Obj>]: Obj[Key]
  }

  // test
  type User = {
    name: string;
    age?: number;
    id: string | undefined;
  };
  type res1 = GetRequired<User>;
}

// ------------------------------ Remove Index Signature ------------------------------
{
  type RemoveIndexSignature<Obj extends Record<string, any>> = {
    [
      Key in keyof Obj
        as Key extends `${infer Str}` ? Str : never
    ]: Obj[Key];
  }

  // test
  type User = {
    [key: string]: any; // 索引签名，Key 不能构造为字符串
    sleep(): void;
  }
  type res1 = RemoveIndexSignature<User>;
  type res2 = RemoveIndexSignature<{
    name: string;
    age: number;
  }>;
}

// ------------------------------ get Public Props ------------------------------
{
  class Will {
    public name: string;
    // public name2: string;
    protected age: number;
    private hobbies: string[];

    constructor() {
      this.name = 'will';
      this.age = 18;
      this.hobbies = ['codding', 'play games'];
    }
  }

  {
    type Res = keyof Will;
    let res: Res = 'name';
    // res = 'name2';
  }

  {
    type ClassPublicProps<Obj extends Record<string, any>> = {
      [Key in keyof Obj]: Obj[Key];
    }
    // test
    type Res = ClassPublicProps<Will>;
  }
}

// ------------------------------ as Const ------------------------------
{
  {
    const obj = {
      a: 1,
      b: 2,
    };
    type Res1 = typeof obj;
  }

  {
    const obj = {
      a: 1,
      b: 2,
    } as const;
    type Res1 = typeof obj;
  }

  {
    const arr = [1, '2', 3];
    type Res1 = typeof arr;
  }

  {
    const arr = [1, '2', 3] as const;
    type Res1 = typeof arr;
  }

  {
    // 带上 readonly, 最后一个 case 才不会为 never
    type ReverseArr<Arr> = Arr extends readonly [infer A, infer B, infer C] ? [C, B, A] : never;

    // test
    type Res1 = ReverseArr<[1, 2, 3]>;
    type Res2 = ReverseArr<[string, number, boolean]>;

    const arr = [1, '2', 3] as const;
    type arrType = typeof arr; // 带了 readonly
    type Res3 = ReverseArr<arrType>; //
  }
}
