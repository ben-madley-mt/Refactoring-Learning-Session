const {renameABadVariable} = require("./src/idea_01");
const {renameAPoorMethodName} = require("./src/idea_02");
const {introduceAVariable} = require("./src/idea_03");
const {extractAMethod} = require("./src/idea_04");
const {shiftLines} = require("./src/idea_05");
const {inlineVariables} = require("./src/idea_06");
const {takeTheHint} = require("./src/idea_07");
const {moveAndExtract} = require("./src/idea_08");
const {overlyObfuscated} = require("./src/idea_09");
const {similarFunctions} = require("./src/idea_10");
const {underAbstracted} = require("./src/idea_11");

describe('Test all ideas', () => {
    describe('Idea 1', () => {
        test('Contains space', () => {
            expect(renameABadVariable('two words')).toEqual(true)
        })

        test('Does not contain space', () => {
            expect(renameABadVariable('word')).toEqual(false)
        })
    })

    describe('Idea 2', () => {
        test('Doubles a list', () => {
            expect(renameAPoorMethodName([1, 2, 3])).toEqual([2, 4, 6])
        })

        test('Handle empty list', () => {
            expect(renameAPoorMethodName([])).toEqual([])
        })

        test('Handle negative numbers', () => {
            expect(renameAPoorMethodName([-1])).toEqual([-2])
        })

        test('Handle zero', () => {
            expect(renameAPoorMethodName([0])).toEqual([0])
        })
    })

    describe('Idea 3', () => {
        test('Extracts numbers bigger than average', () => {
            expect(introduceAVariable([1, 1, 2])).toEqual([2])
        })

        test('Numbers must be strictly bigger', () => {
            expect(introduceAVariable([-1, 0, 1])).toEqual([1])
        })

        test('List can be empty', () => {
            expect(introduceAVariable([])).toEqual([])
        })

        test('No numbers returned if all the same', () => {
            expect(introduceAVariable([6, 6, 6, 6])).toEqual([])
        })
    })

    describe('Idea 4', () => {
        test('Counts vowels in each word', () => {
            expect(extractAMethod('here is a little bit of text')).toEqual([2, 1, 1, 2, 1, 1, 1])
        })

        test('Counts vowels in upper case words', () => {
            expect(extractAMethod('HERE IS A LITTLE BIT OF TEXT')).toEqual([2, 1, 1, 2, 1, 1, 1])
        })
    })

    describe('Idea 5', () => {
        test('Normalise email and phone number', () => {
            expect(shiftLines('TEST@TEST.COM', '07654 321987')).toEqual(['test@test.com', '+447654321987'])
        })

        test('Remove + section from email', () => {
            expect(shiftLines('test+remove_this@test.com', '07654 321987')).toEqual(['test@test.com', '+447654321987'])
        })
    })

    describe('Idea 6', () => {
        test('Adds 20', () => {
            expect(inlineVariables([1, 19, 100])).toEqual([21, 39, 120])
        })

        test('Empty array', () => {
            expect(inlineVariables([])).toEqual([])
        })
    })

    describe('Idea 7', () => {
        test('Odd', () => {
            expect(takeTheHint(7)).toEqual(22)
        })

        test('Even', () => {
            expect(takeTheHint(34)).toEqual(17)
        })
    })

    describe('Idea 8', () => {
        test('Remove spaces', () => {
            expect(moveAndExtract('ABC DEF', 'ABCDEF')).toEqual(true)
            expect(moveAndExtract('ABCDEF', 'ABC DEF')).toEqual(true)
        })

        test('Different plates', () => {
            expect(moveAndExtract('X', 'Y')).toEqual(false)
            expect(moveAndExtract('1', '2')).toEqual(false)
            expect(moveAndExtract('B', '1')).toEqual(false)
            expect(moveAndExtract('ONE THING', 'ANOTHER THING')).toEqual(false)
        })

        test('Similar letters plates', () => {
            expect(moveAndExtract('BOB', '808')).toEqual(true)
            expect(moveAndExtract('808', 'BOB')).toEqual(true)
            expect(moveAndExtract('TIM', '71M')).toEqual(true)
            expect(moveAndExtract('71M', 'TIM')).toEqual(true)
            expect(moveAndExtract('ADAM', '404M')).toEqual(true)
            expect(moveAndExtract('404M', 'ADAM')).toEqual(true)
            expect(moveAndExtract('GAZZA', '64224')).toEqual(true)
            expect(moveAndExtract('64224', 'GAZZA')).toEqual(true)
            expect(moveAndExtract('TONY', '70N7')).toEqual(true)
            expect(moveAndExtract('70N7', 'TONY')).toEqual(true)
        })
    })

    describe('Idea 9', () => {
        test('Fibonacci', () => {
            expect(overlyObfuscated(1)).toEqual(1)
            expect(overlyObfuscated(2)).toEqual(1)
            expect(overlyObfuscated(3)).toEqual(2)
            expect(overlyObfuscated(4)).toEqual(3)
            expect(overlyObfuscated(5)).toEqual(5)
            expect(overlyObfuscated(6)).toEqual(8)
            expect(overlyObfuscated(7)).toEqual(13)
            expect(overlyObfuscated(8)).toEqual(21)
            expect(overlyObfuscated(9)).toEqual(34)
        })
    })

    describe('Idea 10', () => {
        test('Positive number', () => {
            expect(similarFunctions(9)).toEqual([18, 27])
        })

        test('Zero', () => {
            expect(similarFunctions(0)).toEqual([0, 0])
        })

        test('Negative number', () => {
            expect(similarFunctions(-4)).toEqual([-8, -12])
        })
    })

    describe('Idea 11', () => {
        test('Add two numbers', () => {
            expect(underAbstracted('+', 2, 3)).toEqual(5)
        })

        test('Add many numbers', () => {
            expect(underAbstracted('+', [2, 3, 8])).toEqual(13)
        })

        test('Times 2 numbers', () => {
            expect(underAbstracted('x', 2, 3)).toEqual(6)
        })

        test('Times many numbers', () => {
            expect(underAbstracted('x', [2, 3, 8])).toEqual(48)
        })

        test('Subtract 2 numbers', () => {
            expect(underAbstracted('-', 2, 3)).toEqual(-1)
        })

        test('Subtract many numbers', () => {
            expect(underAbstracted('-', [2, 3, 8])).toEqual(-9)
        })

        test('Divide 2 numbers', () => {
            expect(underAbstracted('÷', 4, 2)).toEqual(2)
        })

        test('Divide list numbers', () => {
            expect(underAbstracted('÷', [4, 2])).toEqual(2)
        })

        test('Divide many numbers', () => {
            expect(underAbstracted('÷', [8, 4, 2])).toEqual(1)
        })

        test('Empty list is always 0', () => {
            expect(underAbstracted('+', [])).toEqual(0)
            expect(underAbstracted('x', [])).toEqual(0)
            expect(underAbstracted('-', [])).toEqual(0)
            expect(underAbstracted('÷', [])).toEqual(0)
        })
    })
})
