// Instantiate an array digit[]
// Define a helper function convert(quotient)
// Invoke convert(n)
// Convert digit[]
// Return result

const hexadecimalConverter = (n) => {
    let library = '0123456789abcdef'
    let result = ''

    const convert = (dividend) => {
        if (dividend < 16) {
            result = library[dividend % 16] + result
            return
        }
        result = library[dividend % 16] + result
        convert(Math.floor((dividend / 16)))
    }

    convert(n)
    return result
}

const n = 31
console.log(hexadecimalConverter(n))