for (var i = 1; i <= 5; ++i) {
    setTimeout(timer = ()=>{
        console.log(i)
    }, i * 1000)        // 6 -> 6 -> 6 -> 6 -> 6
}
