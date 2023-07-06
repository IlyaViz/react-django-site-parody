import { useNavigate } from "react-router-dom"
import { useState } from "react"
import UserApi from "../api/UserApi"
import responseTypeEnum from "../enums/ResponseTypeEnum"

export const IsAuthenticatedRoute = (props) => {
    const { children } = props
    const [isAuthenticated, setIsAuthenticated] = useState()
    const navigate = useNavigate()

    UserApi.validateLocalStorageToken().then((res) => {
        if (res != responseTypeEnum.error) {
            setIsAuthenticated(true)
        } else {
            navigate("/login")
        }
    })

    return (
        <>
            {isAuthenticated && children}
        </>
    )
}