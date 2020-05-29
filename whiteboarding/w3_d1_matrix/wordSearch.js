const wordSearch = (matrix, target) => {
    let visited = new Set()
    let found = false

    const dfs = (row, col, index) => {
        let coordinate = `${row}${col}`
        if (index === target.length) {
            found = true
            return
        }
        if (row >= matrix.length || col >= matrix[0].length || row < 0 || col < 0) {return}
        if (visited.has(coordinate)) {return}
        if (matrix[row][col] !== target[index]) {return}
        // The order of the base cases is important in this question!
        
        visited.add(coordinate)
    
        dfs(row - 1, col, index + 1)
        dfs(row + 1, col, index + 1)
        dfs(row, col + 1, index + 1)
        dfs(row, col - 1, index + 1)
        
        visited.delete(coordinate)
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            dfs(i, j, 0)
        }
    }
    return found
}

const matrix = [['a', 'b', 'c', 'd'],
                ['e', 'f', 'g', 'h'],
                ['i', 'd', 'o', 'j'],
                ['k', 'l', 'm', 'n']]
const target = 'dog'

console.log(wordSearch(matrix, target))