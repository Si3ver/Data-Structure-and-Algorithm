function IsPopOrder(pushV, popV)
{
    let stack = [], idx = 0
    for (let i = 0; i < pushV.length; ++i) {
        stack.push(pushV[i])
        while (stack.length && stack[stack.length - 1] === popV[idx]) {
            stack.pop()
            ++idx
        }
    }
    return stack.length === 0
}