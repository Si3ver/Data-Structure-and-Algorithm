// 最长有效括号
// 思路： 用栈匹配，栈里多存一个字符在字符串中的下标。最后查栈来统计不连续下标的断层长度即为最大长度。
var longestValidParentheses = function(s) {
    if (s.length <= 1) return 0;
    var stack = [];
    s.split('').forEach((ch, idx) => {
        if (ch === ')' && stack.length > 0 && stack[stack.length-1].value === '(') {
            stack.pop();
        } else {
            stack.push({index: idx, value: ch});
        }
    });
    if (stack.length === 0){
        return s.length;
    } else {
        var maxVal = 0, lastIdx = -1;
        stack.forEach((item) => {
            maxVal = Math.max(maxVal, item.index - lastIdx - 1);
            lastIdx = item.index;
        })
        return Math.max(maxVal, s.length - lastIdx - 1);
    }
};

// --- test ---
let res = []
res.push(longestValidParentheses('(())'))            // 4
res.push(longestValidParentheses('(()'))             // 2
res.push(longestValidParentheses(')()())(())('))     // 4
console.log(res)
