const wordSearch = (matrix, target) => {
    let visited = new Set()
    let list = []
    let maxRow = matrix.length
    let maxColumn = matrix[0].length

    const findFirstChar = (row, column) => {
        let location = `${row}, ${column}`
        if (visited.has(location)) {return}

        if (matrix[row][column] === target[0]) {
            list.push([row, column])
        }
        visited.add(location)
        if (column + 1 < maxColumn) {findFirstChar(row, column + 1)}
        if (column - 1 >= 0) {findFirstChar(row, column - 1)}
        if (row + 1 < maxRow) {findFirstChar(row + 1, column)}
        if (row - 1 >= 0) {findFirstChar(row - 1, column)}     
    }
    findFirstChar(0, 0)

    let seen = new Set()

    const search = (row, column, index) => {
        let location = `${row}, ${column}`
        console.log(location)
        if (matrix[row][column] !== target[index]) {return false}
        if (seen.has(location)) {return false}
        if (index === target.length) {
            console.log('found')
            return true
        }

        if (matrix[row][column] === target[index]) {
            seen.add(location)
            if (column + 1 < maxColumn) {search(row, column + 1, index + 1)}
            if (column - 1 >= 0) {search(row, column - 1, index + 1)}
            if (row + 1 < maxRow) {search(row + 1, column, index + 1)}
            if (row - 1 >= 0) {search(row - 1, column, index + 1)}    
        }
        
    }

    for (let i = 0; i < list.length; i++) {
        if (search(list[i][0], list[i][1], 0)) {
            return true
        }
    }

    return false
}

const matrix = [['a', 'b', 'c', 'd'],
                ['e', 'f', 'g', 'h'],
                ['i', 'd', 'o', 'j'],
                ['k', 'l', 'm', 'n']]
const target = 'dog'

console.log(wordSearch(matrix, target))