require 'minitest'
require 'minitest/autorun'

Dir.glob('idea_*') { |f| require_relative f }

class TestIdeas < Minitest::Test
  def test_contains_space
    assert_equal(true, Idea01.new.rename_a_bad_variable("two words"))
  end

  def test_does_not_contain_space
    assert_equal(false, Idea01.new.rename_a_bad_variable("word"))
  end

  def test_doubles_a_list
    assert_equal([2, 4, 6], Idea02.new.rename_a_poor_method_name([1, 2, 3]))
  end

  def test_can_handle_empty_list
    assert_equal([], Idea02.new.rename_a_poor_method_name([]))
  end

  def test_can_handle_negative_numbers
    assert_equal([-2], Idea02.new.rename_a_poor_method_name([-1]))
  end

  def test_can_handle_0
    assert_equal([0], Idea02.new.rename_a_poor_method_name([0]))
  end

  def test_extracts_numbers_bigger_than_average
    assert_equal([1], Idea03.new.extract_a_variable([-1, 1]))
  end

  def test_numbers_must_be_strictly_bigger
    assert_equal([1], Idea03.new.extract_a_variable([-1, 0, 1]))
  end

  def test_list_can_be_empty
    assert_equal([], Idea03.new.extract_a_variable([]))
  end

  def test_if_all_numbers_the_same_then_no_numbers_returned
    assert_equal([], Idea03.new.extract_a_variable([6, 6, 6, 6]))
  end

  def test_counts_vowels_in_each_word
    assert_equal([2, 1, 1, 2, 1, 1, 1], Idea04.new.extract_a_method('here is a little bit of text'))
  end

  def test_counts_vowels_in_upper_case_words
    assert_equal([2, 1, 1, 2, 1, 1, 1], Idea04.new.extract_a_method('HERE IS A LITTLE BIT OF TEXT'))
  end

  def test_no_answer_for_empty_string
    assert_equal([], Idea04.new.extract_a_method(''))
  end

  def test_normalise_email_and_phone_number
    assert_equal(['test@test.com', '+447654321987'], Idea05.new.shift_lines('TEST@TEST.COM', '07654 321987'))
  end

  def test_remove_plus_section_from_email
    assert_equal(['test@test.com', '+447654321987'], Idea05.new.shift_lines('test+remove_this@test.com', '07654 321987'))
  end

  def test_adds_20
    assert_equal([21, 39, 120], Idea06.new.inline_variables([1,19, 100]))
  end

  def test_adds_20_in_empty_array
    assert_equal([], Idea06.new.inline_variables([]))
  end

  def test_odd
    assert_equal(22, Idea07.new.take_the_hint(7))
  end

  def test_even
    assert_equal(17, Idea07.new.take_the_hint(34))
  end
end
