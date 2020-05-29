const matrixSpiral = (matrix) => {
    if (matrix.length === 0) {return []}
    let list = []
    let [rowMin, rowMax, colMin, colMax] = [0, matrix.length - 1, 0, matrix[0].length - 1]

    while(rowMin <= rowMax && colMin <= colMax) {
        for (let i = colMin; i <= colMax; i++) {
            list.push(matrix[rowMin][i])
        }
        rowMin++
        for (let i = rowMin; i <= rowMax; i++) {
            list.push(matrix[i][colMax])
        }
        colMax--
        if (rowMax >= rowMin) {
            // Check not the same horizontal path
            for (let i = colMax; i >= colMin; i--) {
                list.push(matrix[rowMax][i])
            }
            rowMax--
        }
        if (colMax >= colMin) {
            // Check not the same vertical path
            for (let i = rowMax; i >= rowMin; i--) {
                list.push(matrix[i][colMin])
            }
            colMin++
        }
    }
    return list
}



const matrix = [[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9,10,11,12]]

console.log(matrixSpiral(matrix))
