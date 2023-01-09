// Task: This function has a routine that's repeated for each word of a sentence. Extract it into its own method.
const extractAMethod = (sentence) => {
    const words = sentence.split(' ')
    const counts = []

    words.forEach((word) => {
        let vowellessWord = word.toLowerCase()

        const vowels = ['a', 'e', 'i', 'o', 'u']
        vowels.forEach((vowel) => {
            vowellessWord = vowellessWord.replace(new RegExp(vowel, 'g'), '')
        })

        counts.push(word.length - vowellessWord.length)
    })

    return counts
}

module.exports = {extractAMethod}
