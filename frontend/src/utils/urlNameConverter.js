const urlNameConverter = (location) => {

    switch (location.pathname) {
        case "/":
            return "Главное"

        case "/my":
            return "Моё"

        default:
            return "Главное"
    }
}

export default urlNameConverter