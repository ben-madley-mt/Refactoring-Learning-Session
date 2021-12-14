class Idea11
  # Can you use extract and introduce variable to make this code clearer?
  def under_abstracted(operation, first_argument, second_argument=nil)
    if second_argument != nil
      number_list = [first_argument, second_argument]
    else
      number_list = first_argument
    end

    if number_list == []
      return 0
    end

    if operation == '+'
      symbol = :+
      result = number_list.shift
      result = number_list.reduce(result, symbol)
    elsif operation == 'x'
      symbol = :*
      result = number_list.shift
      result = number_list.reduce(result, symbol)
    elsif operation == '-'
      symbol = :-
      result = number_list.shift
      result = number_list.reduce(result, symbol)
    elsif operation == '÷'
      symbol = :/
      result = number_list.shift
      result = number_list.reduce(result, symbol)
    end

    result
  end
end
