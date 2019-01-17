function reserve(num, len, result) {
    len = typeof len === 'number' ? len : 0
    result = typeof result === 'number' ? result : 0
    if (num > 0) {
        len++
        result += (num % 10) * (1 / Math.pow(10, len))
        return reserve((num / 10) | 0, len, result)
    } else {
        return result * Math.pow(10, len)
    }
}

function reverseNumber(num) {
    if (num > Math.pow(2, 53)) {
        throw '数字过大'
    }
    let rest = num
    let result = 0
    while (rest > 0) {
        result = result * 10 + (rest % 10)
        rest = parseInt(rest / 10)
    }
    return result
}

let before = 2343598
let after = reverseNumber(2343598)

console.log('reserve:', before)
console.log('result:', after)
