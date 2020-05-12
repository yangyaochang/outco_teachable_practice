const binarySearch = (arr, target) => {
    let start = 0
    let end = arr.length - 1

    while(end - start >= 0) {
        let middle = Math.floor((start + end) / 2)
        if (target === arr[middle]) {
            return middle
        } else if (target > arr[middle]) {
            start = middle + 1
        } else if (target < arr[middle]) {
            end = middle - 1
        }
    }

    return -1
}


const arr = [1,3,4,5,6,7,8,10,11,13,15,17,20,22]
const target = 17
console.log(binarySearch(arr, target))