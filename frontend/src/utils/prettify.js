export const textPrettification = (text, max_length) => {
    text = text[0].toUpperCase() + text.slice(1)
    if (text.length > max_length) {
        text = text.slice(0, max_length) + '...'
    }
    return text
}

export const dateTimeConverter = (mysqlDateTime) => {
    const monthNameDictionary = {
        "01":"Января",
        "02":"Февраля",
        "03":"Марта",
        "04":"Апреля",
        "05":"Мая",
        "06":"Июня",
        "07":"Июля",
        "08":"Августа",
        "09":"Сентября",
        "10":"Октября",
        "11":"Ноября",
        "12":"Декабря"
    }
    const [firstPart, secondPart] = mysqlDateTime.split("T")
    const [year, month, day] = firstPart.split("-")
    const monthName = monthNameDictionary[month]
    return `${day} ${monthName} ${year}`
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
