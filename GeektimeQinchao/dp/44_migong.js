// 迷宫从左上角走到右下角共有多少种走法
// dp(i, j) = dp(i+1, j) + dp(i, j+1)
let count_path = (mat) => {
    let rows = mat.length, cols = mat[0].length;
    let opt = new Array(rows).fill(0).map(_item => new Array(cols).fill(0)); 
    for (let i = rows - 1; i >= 0; --i) {
        for (let j = cols - 1; j >= 0; --j) {
            if (mat[i][j] === 1) {                          // 障碍物
                opt[i][j] = 0;
            } else if (i === rows - 1 && j === cols - 1) {  // 终点
                opt[i][j] = 0;
            } else if (i === rows - 1 || j === cols - 1) {  // 下边缘 & 右边缘
                opt[i][j] = 1;
            } else {
                opt[i][j] = opt[i+1][j] + opt[i][j+1];      // 递推
            }
        }
    }
    return opt[0][0];
};
// --- test ---
let mat =  [[0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1, 0, 0, 0],
            [1, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]];
console.log(count_path(mat));           // 27
