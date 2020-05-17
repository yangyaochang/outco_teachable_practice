function minimumStepsToOne(num) {
    let cache = {}

    const doMath = (result) => {
        // result > num > steps (consider all + 1)
        if (result > num) {return result}
        if (result === num) {return 1}

        let steps = Math.min(doMath(result + 1), doMath(result * 2), doMath(result * 3))

        return steps + 1
    }

    return doMath(1)
}

const num = 4
console.log(minimumStepsToOne(num))