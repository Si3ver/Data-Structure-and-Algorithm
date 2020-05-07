/**
 * @param {string} s
 * @return {boolean}
 */
let bracketMap = new Map(), bracketStr = '()[]{}'
for (let i = 0; i < bracketStr.length; i += 2) {
  let ch1 = bracketStr[i], ch2 = bracketStr[i + 1]
  bracketMap.set(ch2, ch1)
}

var isValid = function(s) {
  let myStack = []
  for (let i = 0; i < s.length; ++i) {
    let ch = s[i]
    if (bracketMap.has(ch)) {
      if (myStack.length && myStack[myStack.length - 1] === bracketMap.get(ch)) {
        myStack.pop()
      } else {
        return false
      }
    } else {
      myStack.push(ch)
    }
  }
  return myStack.length === 0
};

// test cases
console.log(isValid('()'))  // true
console.log(isValid('()[]{}'))  // true
console.log(isValid('(]'))  // false
console.log(isValid('([)]'))  // false
console.log(isValid('{[]}'))  // true
