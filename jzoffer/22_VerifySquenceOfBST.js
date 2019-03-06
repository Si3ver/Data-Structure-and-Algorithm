// 解决方案：分治法，一分为二、分别检查
function VerifySquenceOfBST(sequence)
{
    let help = (seq) => {
        if (!seq.length) return true
        let rootV = seq.pop(), left = []
        while (seq.length && seq[0] < rootV) {
            left.push(seq.shift())              // 左子树left, 右子树seq
        }
        for (let i = 0; i < seq.length; ++i) {
            if (seq[i] < rootV)  return false   // 检查右子树是否合格
        }
        return help(left) && help(seq)
    }

    if (!sequence.length)  return false
    return help(sequence)
}

console.log(VerifySquenceOfBST([1, 2, 4, 5, 3]))
console.log(VerifySquenceOfBST([1, 4, 2, 5, 3]))