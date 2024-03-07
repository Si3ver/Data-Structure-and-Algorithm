{
  // typeof 测试

  type TUser = {
    name: string;
    age: number;
    id: string;
  }

  interface IUser {
    name: string;
    age: number;
    id: string;
  }

  // test
  const tUser: TUser = {
    name: 'wl',
    age: 28,
    id: '1',
  }
  type TTT = typeof tUser;

  const iUser: IUser = {
    name: 'ww',
    age: 22,
    id: '2',
  }
  type III = typeof iUser;
}
