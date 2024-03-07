// ------------------------------ 系统类型 ------------------------------
{
  // 元组
  type Tuple = [number, string];
}

{
  // 接口 - Object
  interface IPerson {
    name: string;
    age: number;
  }
  class Person implements IPerson {
    name: string;
    age: number;
    id: string;
  }
  // inst
  const obj: Person = {
    name: 'wl',
    age: 18,
    id: '1',
  }
}

{
  // 接口 - function
  interface SayHello {
    (name: string): string;
  }
  // inst
  const func: SayHello = (name: string) => {
    return `Hello, ${name}`;
  }
}

{
  interface IPerson {
    name: string;
    age: number;
  }
  // 接口 - 构造器
  interface PersonConstructor {
    new (name: string, age: number): IPerson;
  }
  // inst
  function createPerson(ctor: PersonConstructor): IPerson {
    return new ctor('wl', 18);
  }
}

{
  // 索引类型，可以动态添加属性
  interface IPerson {
    [prop: string]: string | number;
  }
  // inst
  const obj: IPerson = {};
  obj.name = 'wl';
  obj.age = 18;
}

{
  // 枚举类型 enum
  enum Transpiler {
    Babel = 'babel',
    PostCss = 'postcss',
    Terser = 'terser',
    Prettier = 'prettier',
    TypeScriptCompiler = 'tsc',
  }
  // inst
  const t = Transpiler.TypeScriptCompiler;
}

{
  // 模版字面量
  function func(str: `#${string}`) {}

  // use
  // func('abc'); // error
  func('#abc');
}

// ------------------------------ 类型运算 ------------------------------
{
  // extends -- 条件判断
  type T1 = 1 extends 2 ? true : false;
  type T2 = 'a' extends 'a' | 'b' ? true : false;

  type isTwo<T> = T extends 2 ? true : false;
  type T3 = isTwo<1>;
  type T4 = isTwo<2>;
}

{
  // infer -- 推导(提取类型中的一部分)
  type First<Tuple extends unknown[]> = Tuple extends [infer T, ...infer R] ? T : never;
  // !! extends 放在左边，是泛型约束。表示给工具类型传入泛型参数为 Tuple 类型
  type res = First<[1, 2, 3]>;
}

{
  // 联合类型 |
  type Union = 1 | 2 | 3;
}

{
  // 交叉类型 &
  type ObjType = {a: number} & {c: boolean};
  type res = {a: number, c: boolean} extends ObjType ? true : false;
}

{
  /**
   * 映射类型 <-- 对索引类型（object、class等）做修改
   * 索引查询 keyof T
   * 索引访问 T[K]
   */
  type Repeat<T> = {
    [K in keyof T]: [T[K], T[K], T[K]];
  }

  // test
  type res = Repeat<{a: 1, b: 2}>;
}

{
  // 进阶：重映射
  type Repeat<T> = {
    [K in keyof T as `${K & string}${K & string}${K & string}`]: [T[K], T[K], T[K]];
  }

  // test
  type res = Repeat<{a: number, b: string}>
}
