const greatestCommonDivisor = (a, b) => {
    if (a < 0) {a = a * (-1)}
    if (b < 0) {b = b * (-1)}

    if (a < b) {
        let temp  = a
        a = b
        b = temp
    }

    // GCD(a, b) = GCD(a%b, b)
    while (b !== 0 ){
        let holding = b
        b = a % b
        a = holding
    }

    return a
}

console.log(greatestCommonDivisor(78, 52))
console.log(greatestCommonDivisor(52, 78))
console.log(greatestCommonDivisor(78, -52))