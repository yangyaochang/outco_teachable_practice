const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr.unshift(0, 0, arr.splice(i, 1)[0])
        } else {
            if (arr[i] < arr[i - 1]) {
                for (let j = 1; j < i; j++) {
                    if (arr[j - 1] <= arr[i] && arr[i] < arr [j]) {
    
                        // index: 0, (1,............., i - 1), i
                        //          _ arr[i] could be inserted here, so use j - 1 and j, not j and j + 1 
    
                        arr.splice(j, 0, arr.splice(i, 1)[0])
                    }
                }
            }
        }
    }
    return arr
}


const arr1 = [3, 1, 4, 2, 5]
const arr2 = [12, 10, 3, 14, 51, 36, 1]
console.log(insertionSort(arr1))
console.log(insertionSort(arr2))