// TS 内置高级类型
// ------------------------------ function ------------------------------
{
  // 提取函数参数
  type Res1 = Parameters<(name: string, age: number) => {}>;
  // 提取函数返回值类型
  type Res2 = ReturnType<() => string>;

}

{
  interface IPerson {
    name: string;
  }

  interface PersonConstructor {
    new (name: string): IPerson;
  }

  class Person implements IPerson {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  const p1 = new Person('aaa');

  // 提取构造器参数的类型
  type ARes1 = ConstructorParameters<PersonConstructor>;
  type ARes2 = ConstructorParameters<typeof Person>;

  // 提取构造器返回值类型
  type BRes1 = InstanceType<PersonConstructor>;
}

{
  type TPerson = {
    name: string;
  };

  {
    function hello(this: TPerson) {
      console.log(`hello, ${this.name}!`);
    }

    // 提取 this 类型
    type Res1 = ThisParameterType<typeof hello>;
  }

  {
    function say(this: TPerson, age: number) {
      console.log(`hello, ${this.name}!`);
      return this.name + '' + age;
    }

    type Res1 = OmitThisParameter<typeof say>;
  }
}

// ------------------------------ Partial/Required/Readonly/Pick/Record/Exclude/Extract/Omit ------------------------------

{
  type Required<T> = {
    [P in keyof T]-?: T[P];
  }

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  }

  type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  }

  type Record<K extends keyof any, T> = {
    [P in K]: T;
  }

  {
    type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  }
}

{
  type Exclude<T, U> = T extends U ? never : T;
  // test
  type Res = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
}

{
  type Extract<T, U> = T extends U ? T : never;
  // test
  type Res = Extract<'a' | 'b' | 'c', 'a' | 'b' | 'd'>;
}

// ------------------------------ Awaited ------------------------------
{
  // test
  type Res1 = Awaited<Promise<number>>;
  type Res2 = Awaited<Promise<Promise<string>>>;
}

// ------------------------------ NonNullable ------------------------------
{
  // test
  type Res1 = NonNullable<{
    name: string;
  }>;
  type Res2 = NonNullable<null>;
  type Res3 = NonNullable<undefined>;
}

// ------------------------------ string ------------------------------
{
  // test
  type Res1 = Uppercase<'aaa'>;
  type Res2 = Lowercase<'AAA'>;
  type Res3 = Capitalize<'aaa'>;
  type Res4 = Uncapitalize<'AAA'>;
}
