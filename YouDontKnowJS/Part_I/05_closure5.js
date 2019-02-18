for (let i = 1; i <= 5; ++i) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)        // 1 -> 2 -> 3 -> 4 -> 5
}
