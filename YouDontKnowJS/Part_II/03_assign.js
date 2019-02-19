// 浅复制
let obj = {
    c: true
}

let arr = []

function fun () {
    console.log('hi')
}

let myObj = {
    a: 2,
    b: obj,
    c: arr,
    d: fun
}

arr.push(obj, myObj)
// ~~~ 上述代码生成了一个循环引用 ~~~

let newObj = Object.assign( {}, myObj )

console.log(newObj)
console.log(newObj.b === obj)
console.log(newObj.c === arr)
console.log(newObj.d === fun)
