class Idea10
  # Task: Use introduce parameter to replace the double and triple with a single function that takes an argument.
  def similar_functions(n)
    [double(n), triple(n)]
  end

  def double(n)
    n * 2
  end

  def triple(n)
    n * 3
  end
end
