var o1 = {
    a: 1
}
var o2 = Object.create(o1)
console.log(o1.a, o2.a)
o2.a = 2
console.log(o1.a, o2.a)
