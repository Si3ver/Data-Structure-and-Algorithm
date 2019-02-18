// 闭包
// 方式2. 通过函数参数传递内部函数baz
let bar = (fn) => {
    fn()
}

let foo = () => {
    let a = 2
    let baz = () => {
        console.log(a)
    }
    bar(baz)
}

foo()       // 2
