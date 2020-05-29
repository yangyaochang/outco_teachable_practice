const merge = (arr1, arr2) => {
    let p1 = 0
    let p2 = 0
    let result = []

    if (arr1 === undefined) {return arr2}
    if (arr2 === undefined) {return arr1}

    while (arr1[p1] && arr2[p2]) {
        if (arr1[p1] <= arr2[p2]) {
            // equal makes merge sort stable
            result.push(arr1[p1])
            p1++
        } else {
            result.push(arr2[p2])
            p2++
        }
    }

    if (p1 === arr1.length) {
        result = result.concat(arr2.slice(p2))
    } else if (p2 === arr2.length) {
        result = result.concat(arr1.slice(p1))
    }

    return result
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {return arr} 

    let midIndex = Math.floor(arr.length / 2)
    // Math.floor() 無條件捨去
    let left = arr.slice(0, midIndex)
    let right = arr.slice(midIndex, arr.length)

    return merge(mergeSort(left), mergeSort(right))
}



const arr = [3,9,1,4,7]
console.log(mergeSort(arr))