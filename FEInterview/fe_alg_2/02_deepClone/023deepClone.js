/**
 * 深拷贝方法（要点
 *     1. 数组、对象递归拷贝，每次拷贝一层
 *     2. 处理特殊类型 Date、RegExp、Dom Node
 *     3. map 处理循环引用
 *     4. 原型链如何保持，使用 constructor
 * ）
 * @param {*} obj 被拷贝的对象
 * @param {*} wm weak map，用来处理循环引用
 * @returns
 */
function cloneDeep(obj, wm = new WeakMap()) {
  // nullable or basic
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  // DOM
  if (obj.nodeType && 'cloneNode' in obj) {
    return obj.cloneNode(true);
  }

  const _toString = Object.prototype.toString;
  // Date
  if (_toString.call(obj) === '[object Date]') {
    return new Date(obj.getTime());
  }

  // regex
  if (_toString.call(obj) === '[object RegExp]') {
    const flags = [
      ...(obj.global ? ['g'] : []),
      ...(obj.ignoreCase ? ['i'] : []),
      ...(obj.multiline ? ['m'] : []),
    ];
    return new RegExp(obj.source, flags.join(''));
  }

  // weakMap dispose circular deps
  const stashed = wm.get(obj);
  if (stashed) return stashed; // get from wm

  // array or plain object
  const result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {};

  wm.set(obj, result);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = cloneDeep(obj[key], wm);
    }
  }
  return result;
}

// ------ test1 ------
function A() {
  this.a = a;
}

var a = {
  name: 'qiu',
  birth: new Date(),
  pattern: /qiu/gim,
  // container: document.body,
  hobbys: ['book', new Date(), /aaa/gim, 111]
};

var c = new A();
var b = cloneDeep(c);
console.log(c.a === b.a);
console.log(c, b);

// ------ test2 circular obj ------
var o1 = {x: 1}, o2 = {y: 2}
o1.a = o2
o2.b = o1
var o3 = cloneDeep(o1)
o1.z = 100
console.log(o1, o3)

// ------ test 3 circular array ------
var arr1 = [1, 2, 3]
arr1.push(arr1)
var arr2 = cloneDeep(arr1)
arr2.push(1)
console.log(arr1, arr2)

