// 通过 @@iterator 遍历对象
let obj = {
    a: 2,
    b: 3
}

// 自定义 Symbol.iterator 数据属性 <迭代器>
Object.defineProperty( obj, Symbol.iterator, {
    enumerable: false,       // !
    writable: false,
    configurable: true,
    value: function () {
        let o = this, idx = 0, ks = Object.keys(o)
        return {
            next: function () {
                return {
                    value: o[ks[idx++]],
                    done: (idx > ks.length)
                }
            }
        }
    }
})

// --- 1. 手动遍历 ---
let it = obj[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())

// --- 2. for。。。of遍历
for (let v of obj) {
    console.log(v)
}
