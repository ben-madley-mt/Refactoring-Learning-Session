// Task: Use extract method, introduce variable and introduce parameter to make this code clearer.
const underAbstracted = (operation, firstArgument, secondArgument = null) => {
    let numberList
    if (secondArgument !== null) {
        numberList = [firstArgument, secondArgument]
    } else {
        numberList = firstArgument
    }

    if (numberList.length === 0) {
        return 0
    }

    let result
    if (operation === '+') {
        const calc = (a, b) => a + b
        result = numberList.shift()
        result = numberList.reduce(calc, result)
    } else if (operation === 'x') {
        const calc = (a, b) => a * b
        result = numberList.shift()
        result = numberList.reduce(calc, result)
    } else if (operation === '-') {
        const calc = (a, b) => a - b
        result = numberList.shift()
        result = numberList.reduce(calc, result)
    } else if (operation === '÷') {
        const calc = (a, b) => a / b
        result = numberList.shift()
        result = numberList.reduce(calc, result)
    }

    return result
}

module.exports = {underAbstracted}