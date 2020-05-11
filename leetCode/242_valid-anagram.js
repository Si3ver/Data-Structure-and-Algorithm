/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let len = s.length,
    startCodePoint = 'a'.charCodeAt(0),
    cnts = [[...new Array(26)].map(_i => 0), [...new Array(26)].map(_i => 0)]

  for(let i = 0; i < len; ++i) {
    let ch_idx = s[i].charCodeAt(0) - startCodePoint
    ++cnts[0][ch_idx]
  }
  for(let i = 0; i < len; ++i) {
    let ch_idx = t[i].charCodeAt(0) - startCodePoint
    ++cnts[1][ch_idx]
  }
  for(let i = 0; i < 26; ++i) {
    if (cnts[0][i] !== cnts[1][i]) {
      return false
    }
  }
  return true
};

// test cases
console.log(isAnagram('anagram', 'nagaram'))  // true
console.log(isAnagram('rat', 'car'))  // false
