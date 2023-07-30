import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserApi from "../../api/UserApi"
import responseTypeEnum from "../../enums/responseTypeEnum"
import './LoginComponent.css'

const LoginComponent = () => {
    const [user, setUser] = useState({})
    const [isTokenValid, setIsTokenValid] = useState(false)

    useEffect(() => {
        // validate token in local storage
        UserApi.validateLocalStorageToken().then((res) => {
            // if valid get token from localstorage and get user info by it
            if (res != responseTypeEnum.error) {
                setIsTokenValid(true)
                UserApi.getPrivateUserInfo().then((res) => {
                    setUser(res)
                })
            }
        })
    }, [])


    return (
        <div className="login_or_user">
            {isTokenValid ?
                <Link to="/profile">{user.username}</Link>
                :
                <Link to="/login">Войти</Link>
            }
        </div>
    )
}

export default LoginComponent