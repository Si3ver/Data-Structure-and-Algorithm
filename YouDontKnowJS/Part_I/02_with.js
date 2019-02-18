function foo(obj) {
    with (obj) {
        var a = 100
    }
    console.log(a)  // 100
}
let o1 = {b:2};
foo(o1);