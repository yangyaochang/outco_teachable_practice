const bubbleSort = (arr) => {
    let count = 0
    for (let end = arr.length; end > 0; end--) {
        let swap = false
        for (let i = 0; i < end; i++) {
            if (arr[i] > arr[i + 1]) {
                count++
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swap = true
            }
        }
        if (!swap) {break}
    }
    return [arr, count]
}

const arr1 = [3, 1, 4, 2, 5]
const arr2 = [1, 2, 3, 4, 5, 6]
console.log(bubbleSort(arr1))
console.log(bubbleSort(arr2))