class Idea10
  # Can you use introduce parameter to replace the two functions a single function?
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
