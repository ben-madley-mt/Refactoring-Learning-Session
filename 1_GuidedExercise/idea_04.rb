class Idea04
  def extract_a_method(sentence)
    words = sentence.split
    counts = []

    words.each do |word|
      word = word.downcase
      current_count = 0
      ['a', 'e', 'i', 'o', 'u'].each do |vowel|
        current_count += word.count(vowel)
      end
      counts.push(current_count)
    end

    counts
  end
end
