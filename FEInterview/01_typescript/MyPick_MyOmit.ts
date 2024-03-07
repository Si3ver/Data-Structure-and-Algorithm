{
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  type MyOmit1<T, K extends keyof T> = MyPick<T, Exclude<keyof T, K>>;


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
}
