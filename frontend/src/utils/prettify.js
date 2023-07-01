export const textPrettification = (text, max_length) => {
    text = text[0].toUpperCase() + text.slice(1)
    if (text.length > max_length) {
        text = text.slice(0, max_length) + '...'
    }
    return text
}

export const toCamelCase = (key) => {
    let indexToReplace = []
    for (let index = 0; index < key.length; index++) {
        if (key[index] == "_") {
            indexToReplace.push(index - indexToReplace.length)
        }
    }

    let newKey = key.replaceAll("_", "")
    indexToReplace.forEach((underscoreIndex) => {
        const leftPart = newKey.substring(0, underscoreIndex)
        const rightPart = newKey.substring(underscoreIndex + 1)
        newKey = leftPart + newKey[underscoreIndex].toUpperCase() + rightPart
    })
    return newKey
}

export const jsonObjectPrettification = (jsonObject) => {

    const keys = Object.keys(jsonObject)
    const values = Object.values(jsonObject)
    let newJsonObject = {}
    keys.forEach((key, index) => {
        const newKey = toCamelCase(key)
        newJsonObject[newKey] = values[index]
    })

    return newJsonObject;
}

export const jsonObjectArrayPrettification = (array) => {
    let newArray = []
    array.forEach((jsonObject) => {
        const newJsonObject = jsonObjectPrettification(jsonObject)
        newArray.push(newJsonObject)
    })
    return newArray
}
