const quicksort = (arr) => {
    const divide = (start, end) => {
        if (start >= end) {return}
        // > handles the case where pivot value is the biggest or the smallest => mid = start or mid = end

        let mid = start

        // let randomIndex = Math.floor(Math.random() * (end - start)) + start
        // [arr[randomIndex], arr[end]] = [arr[end], arr[randomIndex]]

        for (let i = start; i < end; i++) {
            // end is the pivot, don't have to include it
            if (arr[i] < arr[end]) {
                [arr[i], arr[mid]] = [arr[mid], arr[i]]
                // swap
                mid++
            }
        }
        [arr[mid], arr[end]] = [arr[end], arr[mid]]

        divide(start, mid -1)
        divide(mid + 1, end)
    }

    divide(0, arr.length - 1)
    return arr
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(quicksort(arr))




