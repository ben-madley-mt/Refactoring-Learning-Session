// Task: Use inline variable, inline method and ide hints make this code simpler.
const overly_obfuscated = (n) => {
  const firstNumber = 1
  const secondNumber = 1

  if (isFirstNumber(n)) {
    return firstNumber
  } else if (isSecondNumber(n)) {
    return secondNumber
  } else {
    return getGeneralFibonacciNumber(n)
  }
}

function getGeneralFibonacciNumber(n) {
  return getPreviousFibonacciNumber(n) + getPreviousPreviousFibonacciNumber(n);
}

function getPreviousPreviousFibonacciNumber(n) {
  return getMthPreviousFibonacciNumber(n, 2);
}

function getPreviousFibonacciNumber(n) {
  return getMthPreviousFibonacciNumber(n, 1);
}

function getMthPreviousFibonacciNumber(n, m) {
  return overly_obfuscated(n-m)
}

function isSecondNumber(n) {
  return n === 2
}

function isFirstNumber(n) {
  return n === 1
}

module.exports = { overly_obfuscated }
