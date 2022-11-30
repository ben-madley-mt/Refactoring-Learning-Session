const { rename_a_bad_variable } = require("./src/idea_01");
const {rename_a_poor_method_name} = require("./src/idea_02");
const {introduce_a_variable} = require("./src/idea_03");
const {extract_a_method} = require("./src/idea_04");
const {shift_lines} = require("./src/idea_05");
const {inline_variables} = require("./src/idea_06");
const {take_the_hint} = require("./src/idea_07");
const {move_and_extract} = require("./src/idea_08");
const {overly_obfuscated} = require("./src/idea_09");
const {similar_functions} = require("./src/idea_10");
const {under_abstracted} = require("./src/idea_11");

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

    describe('Idea 4', () => {
        test('Counts vowels in each word', () => {
            expect(extract_a_method('here is a little bit of text')).toEqual([2, 1, 1, 2, 1, 1, 1])
        })

        test('Counts vowels in upper case words', () => {
            expect(extract_a_method('HERE IS A LITTLE BIT OF TEXT')).toEqual([2, 1, 1, 2, 1, 1, 1])
        })
    })

    describe('Idea 5', () => {
        test('Normalise email and phone number', () => {
            expect(shift_lines('TEST@TEST.COM', '07654 321987')).toEqual(['test@test.com', '+447654321987'])
        })

        test('Remove + section from email', () => {
            expect(shift_lines('test+remove_this@test.com', '07654 321987')).toEqual(['test@test.com', '+447654321987'])
        })
    })

    describe('Idea 6', () => {
        test('Adds 20', () => {
            expect(inline_variables([1,19, 100])).toEqual([21, 39, 120])
        })

        test('Empty array', () => {
            expect(inline_variables([])).toEqual([])
        })
    })

    describe('Idea 7', () => {
        test('Odd', () => {
            expect(take_the_hint(7)).toEqual(22)
        })

        test('Even', () => {
            expect(take_the_hint(34)).toEqual(17)
        })
    })

    describe('Idea 8', () => {
        test('Remove spaces', () => {
            expect(move_and_extract('ABC DEF', 'ABCDEF')).toEqual(true)
            expect(move_and_extract('ABCDEF', 'ABC DEF')).toEqual(true)
        })

        test('Different plates', () => {
            expect(move_and_extract('X', 'Y')).toEqual(false)
            expect(move_and_extract('1', '2')).toEqual(false)
            expect(move_and_extract('B', '1')).toEqual(false)
            expect(move_and_extract('ONE THING', 'ANOTHER THING')).toEqual(false)
        })

        test('Similar letters plates', () => {
            expect(move_and_extract('BOB', '808')).toEqual(true)
            expect(move_and_extract('808', 'BOB')).toEqual(true)
            expect(move_and_extract('TIM', '71M')).toEqual(true)
            expect(move_and_extract('71M', 'TIM')).toEqual(true)
            expect(move_and_extract('ADAM', '404M')).toEqual(true)
            expect(move_and_extract('404M', 'ADAM')).toEqual(true)
            expect(move_and_extract('GAZZA', '64224')).toEqual(true)
            expect(move_and_extract('64224', 'GAZZA')).toEqual(true)
            expect(move_and_extract('TONY', '70N7')).toEqual(true)
            expect(move_and_extract('70N7', 'TONY')).toEqual(true)
        })
    })

    describe('Idea 9', () => {
        test('Fibonacci', () => {
            expect(overly_obfuscated(1)).toEqual(1)
            expect(overly_obfuscated(2)).toEqual(1)
            expect(overly_obfuscated(3)).toEqual(2)
            expect(overly_obfuscated(4)).toEqual(3)
            expect(overly_obfuscated(5)).toEqual(5)
            expect(overly_obfuscated(6)).toEqual(8)
            expect(overly_obfuscated(7)).toEqual(13)
            expect(overly_obfuscated(8)).toEqual(21)
            expect(overly_obfuscated(9)).toEqual(34)
        })
    })

    describe('Idea 10', () => {
        test('Positive number', () => {
            expect(similar_functions(9)).toEqual([18, 27])
        })

        test('Zero', () => {
            expect(similar_functions(0)).toEqual([0, 0])
        })

        test('Negative number', () => {
            expect(similar_functions(-4)).toEqual([-8, -12])
        })
    })

    describe('Idea 11', () => {
        test('Add two numbers', () => {
            expect(under_abstracted('+', 2, 3)).toEqual(5)
        })

        test('Add many numbers', () => {
            expect(under_abstracted('+', [2, 3, 8])).toEqual(13)
        })

        test('Times 2 numbers', () => {
            expect(under_abstracted('x', 2, 3)).toEqual(6)
        })

        test('Times many numbers', () => {
            expect(under_abstracted('x', [2, 3, 8])).toEqual(48)
        })

        test('Subtract 2 numbers', () => {
            expect(under_abstracted('-', 2, 3)).toEqual(-1)
        })

        test('Subtract many numbers', () => {
            expect(under_abstracted('-', [2, 3, 8])).toEqual(-9)
        })

        test('Divide 2 numbers', () => {
            expect(under_abstracted('÷', 4, 2)).toEqual(2)
        })

        test('Divide list numbers', () => {
            expect(under_abstracted('÷', [4, 2])).toEqual(2)
        })

        test('Divide many numbers', () => {
            expect(under_abstracted('÷', [8, 4, 2])).toEqual(1)
        })

        test('Empty list is always 0', () => {
            expect(under_abstracted('+', [])).toEqual(0)
            expect(under_abstracted('x', [])).toEqual(0)
            expect(under_abstracted('-', [])).toEqual(0)
            expect(under_abstracted('÷', [])).toEqual(0)
        })
    })
})
