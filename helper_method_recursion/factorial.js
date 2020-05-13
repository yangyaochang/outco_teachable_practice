// bottom-up : start with base case 1
// arr[i] = arr[i - 1] * i

const factorial = (n) => {
    let list = [1]

    const getNum = (index) => {
        if (index > n - 1) {return}
        list[index] = list[index - 1] * (index + 1)
        getNum(index + 1)
    }
    getNum(1)
    return list[n - 1]
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))