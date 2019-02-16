var hasGroupsSizeX = function(deck) {
    if (!(deck instanceof Array) || deck.length < 2)  return false
    let myMap = new Map()
    for (const d of deck) {
        myMap.has(d) ? myMap.set(d, myMap.get(d)+1) : myMap.set(d, 1)
    }
    let cntArr = new Set(myMap.values())
    let gcd = (a, b) => {
        if (a < b) [a, b] = [b, a]
        while (b !== 0) {
            [a, b] = [b, a%b]
        }
        return a
    }
    let divisor = [...cntArr].reduce((a, b) => gcd(a, b))
    return divisor >= 2
};

// --- test ---
let res = []
let testArr1 = [1,2,3,4,4,3,2,1]
let testArr2 = [1,1,1,2,2,2,3,3]
let testArr3 = [1]
let testArr4 = [1,1]
let testArr5 = [1,1,2,2,2,2]
res.push(hasGroupsSizeX(testArr1))
res.push(hasGroupsSizeX(testArr2))
res.push(hasGroupsSizeX(testArr3))
res.push(hasGroupsSizeX(testArr4))
res.push(hasGroupsSizeX(testArr5))
console.log(res)