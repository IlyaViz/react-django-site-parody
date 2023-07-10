import { useLocation } from "react-router-dom";

const urlNameConverter = () => {
    const location = useLocation()

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