{
  // 父类型，更抽象
  interface User {
    name: string;
    age: number;
  }

  // 子类型，更具体
  interface Will {
    name: string;
    age: number;
    hobbies: string [];
  }

  {
    // 协变
    let user: User = {
      name: '',
      age: 20,
    };
    let will: Will = {
      name: 'will',
      age: 30,
      hobbies: ['play game', 'codding'],
    };
    user = will; // ✅ 协变
    // will = user; // ❎ 不允许
  }

  {
    // ! 函数的参数有逆变的性质
    let printHobbies: (will: Will) => void;
    printHobbies = (will) => {
      console.log(will.hobbies);
    }

    let printName: (user: User) => void;
    printName = (user) => {
      console.log(user.name);
    }

    printHobbies = printName; // ✅ 逆变
    // printName = printHobbies; // ❎ 不允许
  }

  {
    // ! 函数的参数有逆变的性质
    let print: (will: Will) => void;
    print = (user: User) => { // ✅ 逆变
      console.log(user.age);
    }
  }
}

{
  type Func = (a: string) => void;
  // const func: Func = (a: '123') => undefined; // ❎ 函数参数只允许逆变，不允许协变
}

// ------------------------------ union to intersection ------------------------------
{
  type Union2Intersection<U> =
    (
      U extends U
        ? (u: U) => unknown
        : never
    ) extends (
      (u: infer R) => unknown
    )
      ? R
      : never;

  // test
  type res1 = Union2Intersection<'a' | 'b'>;
  type res2 = Union2Intersection<{name: string} | {age: number}>;

  const me: res2 = {
    name: 'wl',
    age: 20,
  };
}

// ------------------------------ GetReturnType ------------------------------
{
  type GetReturnType<Func extends Function> =
    Func extends (...args: any[]) => infer ReturnType
      ? ReturnType
      : never;

  // test
  type res1 = GetReturnType<(age: number) => string>;
}

// 名义类型系统 VS 名义类型系统（TS 采用 --- 类似鸭子类型）
{
  type Father = 'a' | 'b' | 'c';
  type Child = 'a' | 'b';

  type res1 = Child extends Father ? true : false; // true
  type res2 = Father extends Child ? true : false; // false
}

{
  type Grand = {
    name: string;
  } | {
    age: number;
  };
  type Father = { name: string };
  type Child1 = { name: string } & { age: number };
  type Child2 = { name: string; age: number };

  type res1 = Child1 extends Father ? true : false; // true
  type res2 = Child2 extends Father ? true : false; // true
  type res3 = Father extends Grand ? true : false; // true
  type res4 = Child1 extends Grand ? true : false; // true
  type res5 = Child1 extends Child2 ? true : false; // true
  type res6 = Child2 extends Child1 ? true : false; // true

  // type
  type IsEqual<A, B> =
    (<T>() => T extends A ? 1 : 2) extends
    (<T>() => T extends B ? 1 : 2)
      ? true
      : false;

  type res = IsEqual<Child1, Child2>;

  let p1: Child1;
  let p2: Child2;
  p1 = {
    name: 'p1',
    age: 20,
  };
  p2 = {
    name: 'p2',
    age: 30,
  };
  p1 = p2;
  p2 = p1;
}

