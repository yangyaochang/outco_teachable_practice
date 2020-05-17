function mergeArrays(a, b) {
    let list = []

    const traverse = (index_a, index_b) => {
        if (index_a === a.length) {
            list  = list.concat(b.splice(index_b))
        }
        if (index_b === b.length) {
            list  = list.concat(a.splice(index_a))
        }    
        if (a[index_a] <= b[index_b]) {
            list.push(a[index_a])
            traverse(index_a + 1, index_b)
        }
        if (a[index_a] > b[index_b]) {
            list.push(b[index_b])
            traverse(index_a, index_b + 1)
        }
    }

    traverse(0, 0)
    return list
}

const a = [1, 2, 3]
const b = [2, 5, 5]
console.log(mergeArrays(a, b))