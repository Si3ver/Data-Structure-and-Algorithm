// 复原IP地址
// 递归search(cur, sub)。 cur不断新增满足大小的ip段，sub存剩余的字符串。
var restoreIpAddresses = function(str) {
    if (str.length < 4 || str.length > 12) return []

    let res = []
    let search = (cur, sub) => {
        if (cur.length === 4 && !sub.length) {
            res.push(cur.join('.'))
        } else {
            for (let i = 0, il = Math.min(3, sub.length); i < il; ++i) {
                let tmp = sub.substr(0, i + 1)
                if ((tmp < 256 && tmp[0] !== '0') || tmp === '0') {
                    search(cur.concat([tmp]), sub.substr(i + 1))
                }
            }
        }
    }
    search([], str)
    return res
};

// --- test ---
console.log(restoreIpAddresses('25525511135'))   // [ '255.255.11.135', '255.255.111.35' ]
console.log(restoreIpAddresses('10010'))         // [ '1.0.0.10', '10.0.1.0' ]
