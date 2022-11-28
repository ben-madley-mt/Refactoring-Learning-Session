class Idea03
  # Task: Currently we recalculate the average number every iteration. Extract it into a variable.
  def introduce_a_variable(number_list)
    big_numbers = []

    number_list.each do |number|
      if number > number_list.reduce(0, :+) / number_list.length
        big_numbers.push(number)
      end
    end

    big_numbers
  end
end
