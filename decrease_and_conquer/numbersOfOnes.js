const numOfOnes = (arr) => {
    let start = 0
    let end = arr.length - 1

    while (end - start > 1) {
        let middle = Math.floor((start + end) / 2)

        if (arr[middle] === 1) {
            end = middle
        } else if (arr[middle] === 0) {
            start = middle
        }
    }

    return arr.length - end
}

const arr = [0,0,0,1,1,1,1,1,1,1]
console.log(numOfOnes(arr))