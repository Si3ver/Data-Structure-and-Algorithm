// 串联所有单词的子串
// m个长度为n的单词。 利用两个哈希表作为单词统计表。 时间O(n)，空间O(n)
var findSubstring = function(str, words) {
    if (!str.length || !words.length) return []

    let res = [], n = words.length, m = words[0].length, m1 = {}
    for (let word of words) {                                   // step1: 单词存入hashmap m1
        m1[word] ? ++m1[word] : (m1[word] = 1)
    }
    for (let i = 0, il = str.length - n * n; i <= il; ++i) {     // 搜索str
        let m2 = {}, j = 0
        for (j = 0; j < n; ++j) {
            let t = str.substr(i + j * m, m)     // 截取长度为m的串
            if (!m1[t]) break                  // 没这个单词
            m2[t] ? ++m2[t] : (m2[t] = 1)      // 找到t这个单词, 则存入hashmap m2
            if (m2[t] > m1[t]) break           // words里，没这个多个t
        }
        if (j === n) res.push(i)               // success!
    }
    return res
};

// --- test ---
console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']))                            // [0, 9]
console.log(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']))    // []
console.log(findSubstring('wordgoodgoodgoodbestword', ['word','good','best','good']))       // [8]
console.log(findSubstring('foobarfoobar', ['foo','bar']))                                   // [0, 3, 6]
