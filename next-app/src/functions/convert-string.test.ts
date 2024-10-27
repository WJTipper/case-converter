import { convertString } from "./convert-string"

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

describe("convertString function", () => {
    test.each(convertStringCases) ("given %p, %p, %p as arguments, returns %p",
        (inputStr, inputCase, outputCase, expectedResult) => {
            const outputStr = convertString(inputStr, inputCase, outputCase)
            expect(outputStr).toEqual(expectedResult)
        }
    )
})
