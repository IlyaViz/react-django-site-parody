import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Nav from "../nav/Nav"
import responseTypeEnum from "../../enums/responseTypeEnum"
import UserApi from "../../api/UserApi"
import "./LoginPage.css"

const LoginPage = () => {
    const [formType, setFormType] = useState("login")
    const [inputValues, setInputValues] = useState({})
    const [loginErrorOccured, setLoginErrorOccured] = useState(false)
    const [registrationErrorOccured, setRegistrationErrorOccured] = useState(false)
    const navigate = useNavigate()

    const changeFormType = (type) => {
        setFormType(type)
        setLoginErrorOccured(false)
        setRegistrationErrorOccured(false)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        const { username, password, email } = inputValues

        if (formType == "login") {
            UserApi.getToken(username, password).then((res) => {
                if (res != responseTypeEnum.error) {
                    const token = res["token"]
                    localStorage.setItem("token", token)
                    navigate("/")
                } else {
                    setLoginErrorOccured(true)
                    console.log("error while login")
                }
            })
        } else if (formType == "registration") {
            UserApi.createUser(username, password).then((res) => {
                if (res != responseTypeEnum.error) {
                    changeFormType("login")
                } else {
                    setRegistrationErrorOccured(true)
                    console.log("error while registration")
                }
            })
        }
        setInputValues({})
    }

    return (
        <div className="login-page">
            <Nav />
            <div className="login-page__content">
                <form className="login-page__form" onSubmit={(event) => onFormSubmit(event)}>
                    <div className="login-page__type-buttons">
                        <button className={formType === "login" ? "active" : ""}
                            onClick={(event) => {
                                event.preventDefault();
                                changeFormType("login");
                            }}>Вход</button>

                        <button className={formType === "registration" ? "active" : ""}
                            onClick={(event) => {
                                event.preventDefault();
                                changeFormType("registration");
                            }}>Регистрация</button>
                    </div>

                    <div className="login-page__form-inputs">
                        <input
                            placeholder="Имя пользователя"
                            value={inputValues["username"] === undefined ? "" : inputValues["username"]}
                            onChange={(event) => {
                                setInputValues({
                                    ...inputValues,
                                    ...{ "username": event.target.value }
                                });
                            }} />
                        <input
                            type="password"
                            placeholder="Пароль"
                            value={inputValues["password"] === undefined ? "" : inputValues["password"]}
                            onChange={(event) => {
                                setInputValues({
                                    ...inputValues,
                                    ...{ "password": event.target.value }
                                });
                            }} />
                        {formType === "registration" &&
                            <input
                                type="email"
                                placeholder="Почта"
                                value={inputValues["email"] === undefined ? "" : inputValues["email"]}
                                onChange={(event) => {
                                    setInputValues({
                                        ...inputValues,
                                        ...{ "email": event.target.value }
                                    });
                                }}
                                style={{ animation: "backInRight 0.75s linear" }}
                            />
                        }
                    </div>
                    <div className="login-page__errors">
                        {registrationErrorOccured &&
                            <div className="login-page__registration-error">
                                Не подходящие имя пользователя или пароль
                            </div>}
                        {loginErrorOccured &&
                            <div className="login-page__login-error">
                                Такой пользователь не найден
                            </div>}
                    </div>
                    {formType === "login" &&
                        <button className="login-page__login-button">Вход</button>}
                    {formType === "registration" &&
                        <button className="login-page__registration-button">Регистрация</button>}
                </form>
            </div>
        </div>
    )

}

export default LoginPage