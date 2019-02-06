// 有效的括号
// 思路： 一个栈~
var isValid = function(s) {
    var stack = [],
        map = {')':'(', ']':'[', '}':'{'};
    for (var i = 0, len = s.length; i < len; ++i) {
        var ch = s[i];
        if (ch in map) {
            if (stack.length > 0 && map[ch] === stack[stack.length-1]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(ch);
        }
    }
    return stack.length === 0;
};

// --- test ---
let res = []
res.push(isValid(']'))          // false
res.push(isValid('[]]'))        // false
res.push(isValid('[]{()}'))     // true
res.push(isValid('[()]{]}'))    // false
res.push(isValid(''))           // true
console.log(res)
