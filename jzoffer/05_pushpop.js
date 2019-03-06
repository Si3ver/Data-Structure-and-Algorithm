let stack1 = [], stack2 = []

// 入队
function push(node)
{
    stack1.push(node)
}
// 出队
function pop()
{
    if (!stack2.length) {
        while (stack1.length) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}