export const textPrettification = (text, max_length) => {
    text = text[0].toUpperCase() + text.slice(1)
    if (text.length > max_length) {
        text = text.slice(0, max_length) + '...'
    }
    return text
}