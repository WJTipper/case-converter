import { validateInputs } from "./validate-inputs"

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

describe("validateInputs function", () => {
    test.each(validateInputsCases) ("given %p, %p, %p as arguments, returns %p",
        (inputStr, inputCase, outputCase, expectedResult) => {
            const outputStr = validateInputs(inputStr, inputCase, outputCase)
            expect(outputStr).toEqual(expectedResult)
        }
    )
})