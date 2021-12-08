class Idea06
  # You'll most commonly need to use inline variable in a case that you want to try a different refactoring.
  # Here, give it a go for practice.
  def inline_variables(numbers)
    summand = 20

    numbers.map{ |number| number + summand }
  end
end
