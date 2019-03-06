function Foo () {}
var a1 = new Foo()
Foo.prototype.constructor = function Gotcha() {}
console.log(a1.constructor)
console.log(a1.constructor.name)
console.log(a1)
