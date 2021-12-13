class Idea02
  def rename_a_poor_method_name(number_list)
    number_list.map { |number| self.make_bigger(number) }
  end

  def make_bigger(number)
    number * 2
  end
end
