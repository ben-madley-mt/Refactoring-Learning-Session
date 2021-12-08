class Idea03
  def extract_a_variable(number_list)
    big_numbers = []

    number_list.each do |number|
      if number > number_list.inject(0, :+)
        big_numbers.push(number)
      end
    end

    big_numbers
  end
end
