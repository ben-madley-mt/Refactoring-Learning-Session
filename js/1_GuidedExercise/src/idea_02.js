// Task: Rename makeBigger to something more specific.
const renameAPoorMethodName = (numberList) => {
    return numberList.map(makeBigger)
}

const makeBigger = (number) => number * 2

module.exports = {renameAPoorMethodName}
