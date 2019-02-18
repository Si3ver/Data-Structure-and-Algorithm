for (var i = 1; i <= 5; ++i) {
    (function() {
        setTimeout(function timer() {
            console.log(i)
        }, 1000 * i)        // 6 -> 6 -> 6 -> 6 -> 6
    })()
}
