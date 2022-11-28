class Idea02
  # Task: Rename make_bigger to something more specific.
  def rename_a_poor_method_name(number_list)
    number_list.map { |number| self.make_bigger(number) }
  end

  def make_bigger(number)
    number * 2
  end
end
