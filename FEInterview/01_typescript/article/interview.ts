{
  // 类型声明
  let x: number;
  x = 10;
  // x = 'string';

  // 类型推断
  let y = 20;
}


{
  // interface & type
  interface Person {
    name: string;
    age: number;
  }
  function greet(person: Person) {
    return `Hello, ${person.name}!`
  }
}

{
  // generic
  function identity<T>(arg: T) {
    return arg;
  }

  let output = identity<string>('hello');
}

{
  // enum
  enum Color {
    Red,
    Green,
    Blue,
  }
  let selectedColor: Color = Color.Red;
}

{
  // nullable types
  let num: number | null = 10;
  num = null;
  // num = undefined;

  let str: string | undefined = 'hi';
  str = undefined;
  // str = null;
}

{
  // union type
  let myVar: string | number;
  myVar = 'hello';
  myVar = 123;

  type Person = {
    name: string;
  } | {
    age: number;
  }
  let p: Person = {
    name: 'wl',
  }
  p = {
    age: 123
  }
  p = {
    name: 'wl',
    age: 123
  }
}

{
  // intersection type
  type T1 = string & number;
  type T2 = {
    name: string;
  } & {
    age: number;
  }
}

{
  // namespace NS1 {

  // }
}

{
  // type assertion
  let someValue: unknown = 'this is a string';
  // let len: number = someValue.length;
  let len: number = (someValue as string).length;
}

{
  // !! type guards
  // 自定义守卫
  function isString(input: any): input is string {
    return typeof input === 'string'
  }

  const input = 123; // 'abc'
  if (isString(input)) {
    console.log('input is string');
  }
}

{
  // Index Types
  interface ServerData {
    id: number;
    name: string;
    age: number;
  }

  function getPropertyValue(obj: ServerData, key: keyof ServerData) {
    return obj[key];
  }
}

{
  interface DynamicObject {
    [key: string]: number | string;
  }
  function processDynamicData(data: DynamicObject) {
    for (let key in data) {
      console.log(`${key}: ${data[key]}`);
    }
  }
}

{
  // class
  class MyClass {
    private value: number = 42;

    public myMethod(this: MyClass) {
      console.log(this.value);
    }

    public myMethod2 = () => {
      console.log(this.value);
    }
  }

  let obj = new MyClass();
  obj.myMethod();
}

{
  // 协变  子类型 -> 超类型
  let subtypes: string[] = ['hello', 'world'];
  let supertype: Object[] = subtypes;

  // 逆变 超类型 -> 子类型 (函数参数是逆变的)
  type Logger<T> = (arg: T) => void;
  let logNumber: Logger<number> = (x: number) => console.log(x);
  let logAny: Logger<any> = logNumber;

  //
  interface Animal {
    name: string;
  }
  interface Dog extends Animal {
    breed: string;
  }
  let animal: Animal = {name: 'Animal'};
  let dog: Dog = {name: 'dog', breed: 'labrador'};

  animal = dog; // 协变
  // dog = animal;
}
