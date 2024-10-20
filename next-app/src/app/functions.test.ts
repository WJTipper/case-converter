import {convertString, validateInputs} from "./functions"

const convertStringCases = [
    ["thisIsALongString", "camel", "kebab", "this-is-a-long-string"],
    ["thisIsALongString", "camel", "pascal", "ThisIsALongString"],
    ["thisIsALongString", "camel", "snake", "this_is_a_long_string"],
    ["this-is-a-long-string", "kebab", "pascal", "ThisIsALongString"],
    ["this-is-a-long-string", "kebab", "snake", "this_is_a_long_string"],
    ["this-is-a-long-string", "kebab", "scream", "THIS_IS_A_LONG_STRING"],
    ["ThisIsALongString", "pascal", "snake", "this_is_a_long_string"],
    ["ThisIsALongString", "pascal", "scream", "THIS_IS_A_LONG_STRING"],
    ["ThisIsALongString", "pascal", "train", "THIS-IS-A-LONG-STRING"],
    ["this_is_a_long_string", "snake", "scream", "THIS_IS_A_LONG_STRING"],
    ["this_is_a_long_string", "snake", "train", "THIS-IS-A-LONG-STRING"],
    ["this_is_a_long_string", "snake", "mumble", "thisisalongstring"],
    ["THIS_IS_A_LONG_STRING", "scream", "train", "THIS-IS-A-LONG-STRING"],
    ["THIS_IS_A_LONG_STRING", "scream", "mumble", "thisisalongstring"],
    ["THIS_IS_A_LONG_STRING", "scream", "camel", "thisIsALongString"],
    ["THIS-IS-A-LONG-STRING", "train", "mumble", "thisisalongstring"],
    ["THIS-IS-A-LONG-STRING", "train", "camel", "thisIsALongString"],
    ["THIS-IS-A-LONG-STRING", "train", "kebab", "this-is-a-long-string"],
    ["string", "invalidCase", "snake", ""],
    ["string", "snake", "invalidCase", ""],
]

const validateInputsCases = [
    ["", "", "", "Empty input string: Please enter an input string"],
    ["string", "", "", "Empty input case: Please select an input case"],
    ["string", "case", "", "Empty output case: Please select an output case"],
    ["invalid-STRING", "kebab", "case", "Invalid input string: kebab & snake case strings should not contain any uppercase characters"],
    ["invalid_STRING", "snake", "case", "Invalid input string: kebab & snake case strings should not contain any uppercase characters"],
    ["INVALID-string", "scream", "case", "Invalid input string: scream & train case strings should not contain any lowercase characters"],
    ["INVALID_string", "train", "case", "Invalid input string: scream & train case strings should not contain any lowercase characters"],
    ["InvalidString", "camel", "case", "Invalid input string: camel case strings should start with a lowercase character"],
    ["invalidString", "pascal", "case", "Invalid input string: pascal case strings should start with a uppercase character"],
    ["invalid-String", "camel", "case", "Invalid input string: camel & pascal strings should not contain dashes or underscores"],
    ["Invalid_String", "pascal", "case", "Invalid input string: camel & pascal strings should not contain dashes or underscores"],
    ["invalid_string", "kebab", "case", "Invalid input string: kebab & train strings should not contain underscores"],
    ["INVALID_STRING", "train", "case", "Invalid input string: kebab & train strings should not contain underscores"],
    ["INVALID-STRING", "scream", "case", "Invalid input string: scream & snake strings should not contain dashes"],
    ["invalid-string", "snake", "case", "Invalid input string: scream & snake strings should not contain dashes"],
    ["thisIsALongString", "camel", "kebab", ""],
    ["this-is-a-long-string", "kebab", "pascal", ""],
    ["ThisIsALongString", "pascal", "snake", ""],
    ["this_is_a_long_string", "snake", "scream", ""],
    ["THIS_IS_A_LONG_STRING", "scream", "train", ""],
    ["THIS-IS-A-LONG-STRING", "train", "mumble", ""]
]

describe("convertString function", () => {
    test.each(convertStringCases) ("given %p, %p, %p as arguments, returns %p",
        (inputStr, inputCase, outputCase, expectedResult) => {
            const outputStr = convertString(inputStr, inputCase, outputCase)
            expect(outputStr).toEqual(expectedResult)
        }
    )
})

describe("validateInputs function", () => {
    test.each(validateInputsCases) ("given %p, %p, %p as arguments, returns %p",
        (inputStr, inputCase, outputCase, expectedResult) => {
            const outputStr = validateInputs(inputStr, inputCase, outputCase)
            expect(outputStr).toEqual(expectedResult)
        }
    )
})