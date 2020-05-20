const knapsackProblem = (weights, values, capacity) => {
    let max = 0

    const add = (currentValue, currentWeight, used) => {
        if (currentWeight > capacity) {return}
        if (used > weights.length) {return}

        max = (currentValue > max) ? currentValue : max
        add(currentValue + values[used], currentWeight + weights[used], used + 1)
        add(currentValue, currentWeight, used + 1)
    }

    add(0, 0, 0)
    return max
}

console.log(knapsackProblem([10, 20, 30], [60, 100, 120], 50))