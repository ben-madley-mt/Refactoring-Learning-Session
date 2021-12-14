class Idea09
  # Can you use inline and ide hints make this code simpler?
  def overly_obfuscated(n)
    first_number = 1
    second_number = 1

    if is_first_number(n)
      return first_number
    elsif is_second_number(n)
      return second_number
    else
      return get_general_fibonacci_number(n)
    end
  end

  def get_general_fibonacci_number(n)
    get_previous_fibonacci_number(n) + get_previous_previous_fibonacci_number(n)
  end

  def get_previous_previous_fibonacci_number(n)
    get_mth_previous_fibonacci_number(n, 2)
  end

  def get_previous_fibonacci_number(n)
    get_mth_previous_fibonacci_number(n, 1)
  end

  def get_mth_previous_fibonacci_number(n, m)
    self.overly_obfuscated(n - m)
  end

  def is_second_number(n)
    n == 2
  end

  def is_first_number(n)
    n == 1
  end
end
