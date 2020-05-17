// Access symbols from the back of the input array, pop() is O(1)
// Get the complement symbol and push it into the output array
// Iterate through the input array

function dnaComplement(s) {
    let reverseComplement = []
    let symbol
    let length = s.length
    let arr = s.split('')

    for (let i = 0; i < length; i++) {
        symbol = arr.pop()
        console.log(symbol)
        if (symbol === 'A') {
            reverseComplement.push('T')
        } else if (symbol === 'T') {
            reverseComplement.push('A')
        } else if (symbol === 'C') {
            reverseComplement.push('G')
        } else if (symbol === 'G') {
            reverseComplement.push('C')
        }
    }

    return reverseComplement.join('')
}

const s = 'GTCAG'
console.log(dnaComplement(s))

