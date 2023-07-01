import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UserApi from "../../api/UserApi"
import NavComponent from "../nav_component/NavComponent"
import responseTypeEnum from "../../enums/ResponseTypeEnum"
import './LoginComponent.css'

const LoginComponent = () => {
    const [user, setUser] = useState({})
    const [isTokenValid, setIsTokenValid] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        
        if (token != null) {
            UserApi.getUserInfoByToken(token).then((res) => {
                if (res != responseTypeEnum.error) {
                    setIsTokenValid(true)
                    setUser(res)
                }
            })
        }
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