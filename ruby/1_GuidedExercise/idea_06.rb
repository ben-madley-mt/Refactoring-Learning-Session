class Idea06
  # Task: Inline the variable summand.
  def inline_variables(numbers)
    summand = 20

    numbers.map{ |number| number + summand }
  end
end
