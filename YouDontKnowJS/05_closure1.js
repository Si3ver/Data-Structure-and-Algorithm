// 闭包
// 方式1. 通过return传递内部函数bar
let foo = () => {
    let a = 2
    let bar = () => {
        console.log(a)
    }
    return bar
}

let baz = foo()
baz()               // 2
