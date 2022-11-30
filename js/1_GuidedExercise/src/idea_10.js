// Task: Use introduce parameter to replace the double and triple with a single function that takes an argument.
const similar_functions = (n) => {
  return [double(n), triple(n)]
}

function double(n) {
  return n * 2
}

function triple(n) {
  return n * 3
}

module.exports = { similar_functions }
