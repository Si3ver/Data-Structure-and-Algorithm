// 闭包
// 方式3. 通过给全局变量赋值传递内部函数baz
let fn

let foo = () => {
    let a = 2
    let baz = () => {
        console.log(a)
    }
    fn = baz
}

let bar = () => {
    fn()
}

foo()
bar()   // 2
