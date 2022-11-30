const { rename_a_bad_variable } = require("./src/idea_01");
const {rename_a_poor_method_name} = require("./src/idea_02");
const {introduce_a_variable} = require("./src/idea_03");

describe('Test all ideas', () => {
    describe('Idea 1', () => {
        test('Contains space', () => {
            expect(rename_a_bad_variable('two words')).toEqual(true)
        })

        test('Does not contain space', () => {
            expect(rename_a_bad_variable('word')).toEqual(false)
        })
    })

    describe('Idea 2', () => {
        test('Doubles a list', () => {
            expect(rename_a_poor_method_name([1, 2, 3])).toEqual([2, 4, 6])
        })

        test('Handle empty list', () => {
            expect(rename_a_poor_method_name([])).toEqual([])
        })

        test('Handle negative numbers', () => {
            expect(rename_a_poor_method_name([-1])).toEqual([-2])
        })

        test('Handle zero', () => {
            expect(rename_a_poor_method_name([0])).toEqual([0])
        })
    })

    describe('Idea 3', () => {
        test('Extracts numbers bigger than average', () => {
            expect(introduce_a_variable([1, 1, 2])).toEqual([2])
        })

        test('Numbers must be strictly bigger', () => {
            expect(introduce_a_variable([-1, 0, 1])).toEqual([1])
        })

        test('List can be empty', () => {
            expect(introduce_a_variable([])).toEqual([])
        })

        test('No numbers returned if all the same', () => {
            expect(introduce_a_variable([6, 6, 6, 6])).toEqual([])
        })
    })
})

// require 'minitest'
// require 'minitest/autorun'
//
// Dir.glob('idea_*') { |f| require_relative f }
//
// class TestIdeas < Minitest::Test
// def test_contains_space
// assert_equal(true, Idea01.new.rename_a_bad_variable("two words"))
// end
//
// def test_does_not_contain_space
// assert_equal(false, Idea01.new.rename_a_bad_variable("word"))
// end
//
// def test_doubles_a_list
// assert_equal([2, 4, 6], Idea02.new.rename_a_poor_method_name([1, 2, 3]))
// end
//
// def test_can_handle_empty_list
// assert_equal([], Idea02.new.rename_a_poor_method_name([]))
// end
//
// def test_can_handle_negative_numbers
// assert_equal([-2], Idea02.new.rename_a_poor_method_name([-1]))
// end
//
// def test_can_handle_0
// assert_equal([0], Idea02.new.rename_a_poor_method_name([0]))
// end
//
// def test_extracts_numbers_bigger_than_average
// assert_equal([2], Idea03.new.introduce_a_variable([1, 1, 2]))
// end
//
// def test_numbers_must_be_strictly_bigger
// assert_equal([1], Idea03.new.introduce_a_variable([-1, 0, 1]))
// end
//
// def test_list_can_be_empty
// assert_equal([], Idea03.new.introduce_a_variable([]))
// end
//
// def test_if_all_numbers_the_same_then_no_numbers_returned
// assert_equal([], Idea03.new.introduce_a_variable([6, 6, 6, 6]))
// end
//
// def test_counts_vowels_in_each_word
// assert_equal([2, 1, 1, 2, 1, 1, 1], Idea04.new.extract_a_method('here is a little bit of text'))
// end
//
// def test_counts_vowels_in_upper_case_words
// assert_equal([2, 1, 1, 2, 1, 1, 1], Idea04.new.extract_a_method('HERE IS A LITTLE BIT OF TEXT'))
// end
//
// def test_no_answer_for_empty_string
// assert_equal([], Idea04.new.extract_a_method(''))
// end
//
// def test_normalise_email_and_phone_number
// assert_equal(['test@test.com', '+447654321987'], Idea05.new.shift_lines('TEST@TEST.COM', '07654 321987'))
// end
//
// def test_remove_plus_section_from_email
// assert_equal(['test@test.com', '+447654321987'], Idea05.new.shift_lines('test+remove_this@test.com', '07654 321987'))
// end
//
// def test_adds_20
// assert_equal([21, 39, 120], Idea06.new.inline_variables([1,19, 100]))
// end
//
// def test_adds_20_in_empty_array
// assert_equal([], Idea06.new.inline_variables([]))
// end
//
// def test_odd
// assert_equal(22, Idea07.new.take_the_hint(7))
// end
//
// def test_even
// assert_equal(17, Idea07.new.take_the_hint(34))
// end
//
// def test_remove_spaces
// assert_equal(true, Idea08.new.move_and_extract('ABC DEF', 'ABCDEF'))
// assert_equal(true, Idea08.new.move_and_extract('ABCDEF', 'ABC DEF'))
// end
//
// def test_different_plates
// assert_equal(false, Idea08.new.move_and_extract('X', 'Y'))
// assert_equal(false, Idea08.new.move_and_extract('1', '2'))
// assert_equal(false, Idea08.new.move_and_extract('B', '1'))
// assert_equal(false, Idea08.new.move_and_extract('ONE THING', 'ANOTHER THING'))
// end
//
// def test_similar_letters
// assert_equal(true, Idea08.new.move_and_extract('BOB', '808'))
// assert_equal(true, Idea08.new.move_and_extract('808', 'BOB'))
// assert_equal(true, Idea08.new.move_and_extract('TIM', '71M'))
// assert_equal(true, Idea08.new.move_and_extract('71M', 'TIM'))
// assert_equal(true, Idea08.new.move_and_extract('ADAM', '404M'))
// assert_equal(true, Idea08.new.move_and_extract('404M', 'ADAM'))
// assert_equal(true, Idea08.new.move_and_extract('GAZZA', '64224'))
// assert_equal(true, Idea08.new.move_and_extract('64224', 'GAZZA'))
// assert_equal(true, Idea08.new.move_and_extract('TONY', '70N7'))
// assert_equal(true, Idea08.new.move_and_extract('70N7', 'TONY'))
// end
//
// def test_fibonacci_1
// assert_equal(1, Idea09.new.overly_obfuscated(1))
// end
//
// def test_fibonacci_2
// assert_equal(1, Idea09.new.overly_obfuscated(2))
// end
//
// def test_fibonacci_3
// assert_equal(2, Idea09.new.overly_obfuscated(3))
// end
//
// def test_fibonacci_4
// assert_equal(3, Idea09.new.overly_obfuscated(4))
// end
//
// def test_fibonacci_5
// assert_equal(5, Idea09.new.overly_obfuscated(5))
// end
//
// def test_fibonacci_6
// assert_equal(8, Idea09.new.overly_obfuscated(6))
// end
//
// def test_fibonacci_7
// assert_equal(13, Idea09.new.overly_obfuscated(7))
// end
//
// def test_fibonacci_8
// assert_equal(21, Idea09.new.overly_obfuscated(8))
// end
//
// def test_fibonacci_9
// assert_equal(34, Idea09.new.overly_obfuscated(9))
// end
//
// def test_positive_number
// assert_equal([18, 27], Idea10.new.similar_functions(9))
// end
//
// def test_zero
// assert_equal([0, 0], Idea10.new.similar_functions(0))
// end
//
// def test_negative_number
// assert_equal([-8, -12], Idea10.new.similar_functions(-4))
// end
//
// def test_add_2_numbers
// assert_equal(5, Idea11.new.under_abstracted('+', 2, 3))
// end
//
// def test_add_list_many_numbers
// assert_equal(13, Idea11.new.under_abstracted('+', [2, 3, 8]))
// end
//
// def test_times_2_numbers
// assert_equal(6, Idea11.new.under_abstracted('x', 2, 3))
// end
//
// def test_times_list_many_numbers
// assert_equal(48, Idea11.new.under_abstracted('x', [2, 3, 8]))
// end
//
// def test_subtract_2_numbers
// assert_equal(-1, Idea11.new.under_abstracted('-', 2, 3))
// end
//
// def test_subtract_list_many_numbers
// assert_equal(-9, Idea11.new.under_abstracted('-', [2, 3, 8]))
// end
//
// def test_divide_2_numbers
// assert_equal(2, Idea11.new.under_abstracted('÷', 4, 2))
// end
//
// def test_divide_list_numbers
// assert_equal(2, Idea11.new.under_abstracted('÷', [4, 2]))
// end
//
// def test_divide_list_many_numbers
// assert_equal(1, Idea11.new.under_abstracted('÷', [8, 4, 2]))
// end
//
// def test_empy_always_0
// assert_equal(0, Idea11.new.under_abstracted('+', []))
// assert_equal(0, Idea11.new.under_abstracted('x', []))
// assert_equal(0, Idea11.new.under_abstracted('-', []))
// assert_equal(0, Idea11.new.under_abstracted('÷', []))
// end
//
// end
