const nonConsecutiveOnes = (num) => {
    let list = []

    const append = (binaryStr) => {
        if (binaryStr.length === num) {
            list.push(binaryStr)
            return
        }

        if (binaryStr[binaryStr.length - 1] === '1') {
            append(binaryStr + 0)
        } else {
            append(binaryStr + 0)
            append(binaryStr + 1)
        }
    }

    append('')
    return list
}

const num = 3
console.log(nonConsecutiveOnes(num))