class Idea07
  # Here the if statement is a negative (not equal to 0). Can you follow the hint to make the if a positive?
  def take_the_hint(number)
    if number % 2 != 0
      number * 3 + 1
    else
      number / 2
    end
  end
end
