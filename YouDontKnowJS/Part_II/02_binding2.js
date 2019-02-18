// 隐式绑定
// let foo = () => {
//     console.log(this.a)
// }
function foo() {
    console.log(this.a)
}

let obj = {
    a: 2,
    foo: foo
}

obj.foo()           // 2
let bar = obj.foo   // 隐式丢失
bar()               // undefined
