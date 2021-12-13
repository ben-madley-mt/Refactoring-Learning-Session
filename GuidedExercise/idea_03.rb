class Idea03
  # Here we recalculate the average number every iteration. We should extract it as a variable.
  def introduce_a_variable(number_list)
    big_numbers = []

    number_list.each do |number|
      if number > number_list.reduce(0, :+)
        big_numbers.push(number)
      end
    end

    big_numbers
  end
end
