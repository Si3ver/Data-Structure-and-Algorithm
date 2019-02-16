// 种花问题。 （计算出最多能种多少花）
var canPlaceFlowers = function(flowerbed) {
    if (flowerbed.length < 1) return false
    let cnt = 0, len = flowerbed.length
    for (let i = 0; i < len; ++i) {
        if (i === len-1) {
            flowerbed[i] === 0 && ++cnt
        }else if (flowerbed[i] === 0) {
            if (flowerbed[i+1] === 0) {
                ++cnt
                ++i
            }
        } else {
            ++i
        }
    }
    return cnt
};

// --- test ---
let res = []
let testArr1 = [1,0,0,0,0]
let testArr2 = [1,0,0,0,1]
res.push(canPlaceFlowers(testArr1))
res.push(canPlaceFlowers(testArr2))
console.log(res)
