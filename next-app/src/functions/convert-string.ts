function deconstructCamelAndPascal (inputStr: string) {
    inputStr = [inputStr[0].toLowerCase(), inputStr.slice(1)].join("")
    let stringContainsUppercase: boolean = true
    const outputArray: string[] = [inputStr]

    while (stringContainsUppercase) {
        let lastElement: string = outputArray[outputArray.length - 1]
        lastElement = [lastElement[0].toLowerCase(), lastElement.slice(1)].join("")
        const uppercaseIndex: number = lastElement.search(/[A-Z]/)
        if (uppercaseIndex < 0) {
            stringContainsUppercase = false
            break
        }
        outputArray.pop()
        const newLastElements: string[] = [lastElement.slice(0, uppercaseIndex), lastElement.slice(uppercaseIndex)]
        outputArray.push(...newLastElements)
    }

    return outputArray
}

export function convertString (inputStr: string, inputCase: string, outputCase: string) {
    let deconstructedString: string[] = []

    if (inputCase == "kebab" || inputCase == "train") {
        deconstructedString = inputStr.split("-")
    } else if (inputCase == "snake" || inputCase == "scream") {
        deconstructedString = inputStr.split("_")
    } else if (inputCase == "camel" || inputCase == "pascal") {
        deconstructedString = deconstructCamelAndPascal(inputStr)
    }

    if (outputCase == "kebab" || outputCase == "snake" || outputCase == "mumble") {
        deconstructedString = deconstructedString.map((elem: string) => elem.toLowerCase())
    } else if (outputCase == "scream" || outputCase == "train") {
        deconstructedString = deconstructedString.map((elem: string) => elem.toUpperCase())
    } else if (outputCase == "pascal") {
        deconstructedString = deconstructedString.map((elem: string) => [elem[0].toUpperCase(), elem.slice(1).toLowerCase()].join(""))
    } else if (outputCase == "camel") {
        deconstructedString = deconstructedString.map((elem: string) => [elem[0].toUpperCase(), elem.slice(1).toLowerCase()].join(""))
        deconstructedString[0] = [deconstructedString[0][0].toLowerCase(), deconstructedString[0].slice(1)].join("")
    }

    if (outputCase == "camel" || outputCase == "mumble" || outputCase == "pascal") {
        return deconstructedString.join("")
    } else if (outputCase == "kebab" || outputCase == "train") {
        return deconstructedString.join("-")
    } else if (outputCase == "snake" || outputCase == "scream") {
        return deconstructedString.join("_")
    }

    return ""
}