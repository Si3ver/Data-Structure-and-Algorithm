{
  // 重复声明 interface 会自动合并

  interface IUser {
    name: string;
    age: number;
  }

  interface IUser {
    name: string;
    id: string;
  }

  // test
  const iUser: IUser = {
    name: 'ww',
    age: 22,
    id: '2',
  }
}
