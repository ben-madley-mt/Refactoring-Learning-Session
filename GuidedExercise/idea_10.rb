class Idea10
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

    # THINK OF WAY TO DO THIS THAT'S EASIER FOR A NOVICE TO HANDLE
    if operation == '+'
      result = number_list.shift
      number_list.each { |number| result = result + number }
    elsif operation == 'x'
      result = number_list.shift
      number_list.each { |number| result = result * number }
    elsif operation == '-'
      result = number_list.shift
      number_list.each { |number| result = result - number }
    elsif operation == '/'
      result = number_list.shift
      number_list.each { |number| result = result / number }
    end

    result
  end
end
