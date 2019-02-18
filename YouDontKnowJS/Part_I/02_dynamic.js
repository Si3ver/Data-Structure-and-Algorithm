// 静态作用域，基于静态词法
function foo() {
    console.log(a)      // 2
}

function bar() {
    var a = 3
    foo()
}

var a = 2
bar()
