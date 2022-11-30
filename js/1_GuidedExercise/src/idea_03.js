// Task: Currently we recalculate the average number every iteration. Extract it into a variable.
const introduce_a_variable = (number_list) => {
  const big_numbers = []

  number_list.forEach((number) => {
    if (number > number_list.reduce((accumulator, current) => accumulator + current, 0) / number_list.length) {
      big_numbers.push(number)
    }
  })

  return big_numbers
}

module.exports = { introduce_a_variable }
