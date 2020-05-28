const matrixSpiral = (n) => {
    let cell = []
    let result = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            cell.push(0)
        }
        result.push(cell)
        cell = []
    }

    return result
}

const n = 3
console.log(matrixSpiral(n))