// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).顺时针旋转

// for example
// given input matrix
// matrix = [
//   [1, 8, 0],
//   [2, 5, 3],
//   [4, 7, 6]
// ]
// after rotate it
// matrix = [
//   [4, 2, 1],
//   [7, 5, 8],
//   [6, 3, 0]
// ]

matrix = [
  [1, 8, 0],
  [2, 5, 3],
  [4, 7, 6]
]
let rotate = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = m - 1; j >= 0; j--) {
      matrix[i].push(matrix[j][i]); // 把相应的列一次添加到相应的行
    }
  }
  for (let j = 0; j < m; j++) {
    matrix[j].splice(0, n); // 删除行中原来的数字
  }
  return matrix; // 为了方便看结果，返回矩阵
}

rotate(matrix)



