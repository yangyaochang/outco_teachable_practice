// Instantiate a currentMax array to keep track of the maximum gold while iterate through houses
// Compare the max gold when you were at previous house to the max gole you get when you were at two houses before plau the gold of current house
// Max(i) = Math.max(Max(i - 1), Max(i - 2) + input[i])
// Repeat till I reach the end ot the input
// Return the last item in currentMax 

// input: [1, 2, 4, 1, 5, 12, 5]

// Diagram
// [1, 2, 4, 1, 5, 12, 5]
// [1, 2, 5, 5, 10, 17, 17]

const houseRobber = (arr) => {
    let currentMax = [arr[0]]

    currentMax.push(Math.max(arr[0], arr[1]))

    for (let i = 2; i < arr.length; i++) {
        currentMax.push(Math.max(currentMax[i - 1], currentMax[i - 2] + arr[i]))
    }

    return currentMax.pop()
}

const arr = [1, 2, 4, 1, 5, 12, 5]
console.log(houseRobber(arr))
