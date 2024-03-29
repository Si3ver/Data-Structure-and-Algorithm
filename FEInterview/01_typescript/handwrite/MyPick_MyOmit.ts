// 常见面试题：TS 中的工具类型的实现(Required，Partial, Pick, Omit, )
// eg. https://q.shanyue.tech/fe/ts/695
{
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  type MyOmit1<T, K extends keyof T> = MyPick<T, Exclude<keyof T, K>>;

  // extends 用于声明条件类型
  type MyExclude<T, U> = T extends U ? never : T;
  type MyOmit2<T, K extends keyof any> = MyPick<T, MyExclude<keyof T, K>>;

  // ---- test cases ----
  interface User {
    id: string;
    name: string;
    age: number;
  }

  type UserPick = MyPick<User, 'name' | 'age'>;
  type UserOmit1 = MyOmit1<User, 'id'>;
  type UserOmit2 = MyOmit2<User, 'id'>;

  type KeysLeft = MyExclude<'name' | 'age' | 'id', 'id'>;
}

{
  type MyPick<T, P extends keyof T> = {
    [Key in P]: T[Key];
  }

  type MyExclude<T, U> = T extends U ? never : T;
  type MyOmit<T, P extends keyof T> = MyPick<T, MyExclude<keyof T, P>>;

  // test
  type User = {
    name: string;
    age: number;
    id: string;
  }
  type res1 = MyPick<User, 'name' | 'age'>;
  type o2 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
  type res2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>;
  type res3 = MyOmit<User, 'name' | 'age'>;
}
