// 逆波兰表达式求值
// 思路：用栈判断是数字还是操作符，运到操作符则出栈运算入栈。
var evalRPN = function(tokens) {
    var stack = [], ops = ['+', '-', '*', '/'];
    tokens.forEach(token => {
        if (ops.indexOf(token) === -1) {
            stack.push(Number(token));
        } else {
            var token2 = stack.pop(),           // ! 此处要注意弹出顺序，先弹出第二个（右），再弹出第一个（左）
                token1 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(token1 + token2);
                    break;
                case '-':
                    stack.push(token1 - token2);
                    break;
                case '*':
                    stack.push(token1 * token2);
                    break;
                case '/':
                    var tmp = token1 / token2;
                    stack.push(tmp > 0 ? Math.floor(tmp) : Math.ceil(tmp));    // 整除时，注意正负
                    break;
                default:
                    break;
            }
        }
    });
    return stack[0];
};

// --- test ---
let res = []
res.push(evalRPN(["2", "1", "+", "3", "*"]))            // 9
res.push(evalRPN(["4", "13", "5", "/", "+"]))           // 6
res.push(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))  // 22
console.log(res)
