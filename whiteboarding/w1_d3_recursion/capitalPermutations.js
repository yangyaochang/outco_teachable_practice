const letterCasePermutation = (S) => {
    let list = []

    const append = (index, str) => {
        if (index === S.length) {
            list.push(str)
            return
        }

        if (!S[index].match(/[0-9]/)) {
            if (S[index] === S[index].toUpperCase()) {
                append(index + 1, str + S[index].toLowerCase())
            } else {
                append(index + 1, str + S[index].toUpperCase())
            }
            append(index + 1, str + S[index])
        } else {
            append(index + 1, str + S[index])
        }
        
    }

    append(0, '')
    return list
};

const str = 'A1d3'
console.log(letterCasePermutation(str))