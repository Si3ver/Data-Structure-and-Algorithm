/*
  1  2  3  4
  5  6  7  8
  9 10 11 12
 13 14 15 16
 => 1 2 3 4 8 12 16 15 14 13 9 5, 6 7 11 10
*/
function printMatrix(matrix) {
    const rows = matrix.length, cols = matrix[0].length
    let res = [], circles = (Math.min(rows, cols)+1)>>1
    for (let circle = 0; circle < circles; ++circle) {
        let row = circle, col = circle
        for (; col < cols-circle; ++col) res.push(matrix[row][col])
        for (--col, ++row; row < rows-circle; ++row) res.push(matrix[row][col])
        if (circle !== rows - circle - 1) {
            for (--row, --col; col >= circle; --col) res.push(matrix[row][col])
        }
        if (circle !== cols - circle - 1) {
            for (++col, --row; row > circle; --row) res.push(matrix[row][col])
        }
    }
    return res
}