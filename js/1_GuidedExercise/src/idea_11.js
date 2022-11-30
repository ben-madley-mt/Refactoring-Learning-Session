// Task: Use extract method, introduce variable and introduce parameter to make this code clearer.
const under_abstracted = (operation, first_argument, second_argument=null) => {
  let numberList
  if (second_argument !== null) {
    numberList = [first_argument, second_argument]
  } else {
    numberList = first_argument
  }

  if (numberList.length === 0) {
    return 0
  }

  let result
  if(operation === '+') {
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

module.exports = { under_abstracted }