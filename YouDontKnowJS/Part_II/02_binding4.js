// new 绑定
function Foo(a) {
    this.a = a;
}

var bar = new Foo(2);
console.log(bar.a);     // 2
