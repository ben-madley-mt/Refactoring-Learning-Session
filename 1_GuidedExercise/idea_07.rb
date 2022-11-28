class Idea07
  # Task: Here the if condition is a negative statement (_not_ equal to 0). Follow the hint from Ruby Mine to make the if condition a positive statement.
  def take_the_hint(number)
    if number % 2 != 0
      number * 3 + 1
    else
      number / 2
    end
  end
end
