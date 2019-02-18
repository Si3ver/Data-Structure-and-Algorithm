// 绑定规则三： 显式绑定
var obj = {
    name: 'awesome'
};

function foo () {
    console.log(this.name)
}

// 一、利用call，显式绑定
foo.call(obj);

// 二、利用bind，硬绑定
var bar = foo.bind(obj);
bar();

// 三、API调用的"上下文"
// eg. Array.prototype.forEach API的第二个参数（可选参数），用于传递一个上下文给第一个参数（回调函数）。
[1, 2, 3].forEach(function(n) {
    console.log(n, this.name)
}, obj); 
