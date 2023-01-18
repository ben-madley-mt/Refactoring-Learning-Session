// Task: Currently we recalculate the average number every iteration. Extract it into a variable.
const introduceAVariable = (numberList) => {
    if (numberList.length === 0) {
        return []
    }

    const bigNumbers = []

    numberList.forEach((number) => {
        if (number > numberList.reduce((accumulator, current) => accumulator + current, 0) / numberList.length) {
            bigNumbers.push(number)
        }
    })

    return bigNumbers
}

module.exports = {introduceAVariable}
