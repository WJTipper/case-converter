export function validateInputs (inputStr: string, inputCase: string, outputCase: string) {
    if (inputStr == "") {
        return "Empty input string: Please enter an input string"
    } else if (inputCase == "") {
        return "Empty input case: Please select an input case"
    } else if (outputCase == "") {
        return "Empty output case: Please select an output case"
    }

    if (inputCase == "kebab" || inputCase == "snake") {
        if (inputStr.search(/[A-Z]/) != -1) {
            return "Invalid input string: kebab & snake case strings should not contain any uppercase characters"
        }
    } else if (inputCase == "scream" || inputCase == "train") {
        if (inputStr.search(/[a-z]/) != -1) {
            return "Invalid input string: scream & train case strings should not contain any lowercase characters"
        }
    } else if (inputCase == "camel") {
        if (inputStr.search(/[a-z]/) != 0) {
            return "Invalid input string: camel case strings should start with a lowercase character"
        }
    } else if (inputCase == "pascal") {
        if (inputStr.search(/[A-Z]/) != 0) {
            return "Invalid input string: pascal case strings should start with a uppercase character"
        }
    }

    if (inputCase == "camel" || inputCase == "pascal") {
        if (inputStr.search(/_/) != -1 || inputStr.search(/-/) != -1) {
            return "Invalid input string: camel & pascal strings should not contain dashes or underscores"
        }
    } else if (inputCase == "kebab" || inputCase == "train") {
        if (inputStr.search(/_/) != -1) {
            return "Invalid input string: kebab & train strings should not contain underscores"
        }
    } else if (inputCase == "scream" || inputCase == "snake") {
        if (inputStr.search(/-/) != -1) {
            return "Invalid input string: scream & snake strings should not contain dashes"
        }
    }

    return ""
}