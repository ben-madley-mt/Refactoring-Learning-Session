// Task: Inline the variable summand.
const inline_variables = (numbers) => {
  const summand = 20

  return numbers.map((number) => number + summand)
}

module.exports = { inlineVariables: inline_variables }
