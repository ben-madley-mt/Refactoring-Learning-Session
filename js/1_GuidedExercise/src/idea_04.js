// Task: This function has a routine that's repeated for each word of a sentence. Extract it into its own method.
const extract_a_method = (sentence) => {
  const words = sentence.split(' ')
  const counts = []

  words.forEach((word) => {
    let vowelless_word = word.toLowerCase()

    const vowels = ['a', 'e', 'i', 'o', 'u']
    vowels.forEach((vowel) => {
      vowelless_word = vowelless_word.replaceAll(vowel, '')
    })

    counts.push(word.length - vowelless_word.length)
  })

  return counts
}

module.exports = { extract_a_method }
