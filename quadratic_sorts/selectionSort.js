const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}


const arr1 = [3, 1, 4, 2, 5]
const arr2 = [1, 10, 3, 14, 51, 36]
console.log(selectionSort(arr1))
console.log(selectionSort(arr2))