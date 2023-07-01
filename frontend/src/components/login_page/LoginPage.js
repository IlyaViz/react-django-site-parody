import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import responseTypeEnum from "../../enums/ResponseTypeEnum"
import UserApi from "../../api/UserApi"
import "./LoginPage.css"

const LoginPage = () => {
    const [formType, setFormType] = useState("login")
    const [inputValues, setInputValues] = useState({})
    const navigate = useNavigate()

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
                    console.log("error while login")
                }
            })
        } else if (formType == "registration") {
            UserApi.createUser(username, password).then((res) => {
                if (res != responseTypeEnum.error) {
                    setFormType("login")
                } else {
                    console.log("error while registration")
                }
            })
        }
        setInputValues({})
    }

    return (
        <div className="login_page">
            <form className="login_form" onSubmit={(event) => onFormSubmit(event)}>
                <div className="type_buttons">
                    <button className={formType == "login" ? "selected_type" : ""}
                        onClick={(event) => {
                            event.preventDefault()
                            setFormType("login")
                        }}>Вход</button>

                    <button className={formType == "registration" ? "selected_type" : ""}
                        onClick={(event) => {
                            event.preventDefault()
                            setFormType("registration")
                        }}>Регистрация</button>
                </div>

                <div className="form_inputs">
                    <input
                        placeholder="Имя пользователя"
                        value={inputValues["username"] == undefined ? "" : inputValues["username"]}
                        onChange={(event) => {
                            setInputValues({
                                ...inputValues,
                                ...{ "username": event.target.value }
                            })
                        }} />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={inputValues["password"] == undefined ? "" : inputValues["password"]}
                        onChange={(event) => {
                            setInputValues({
                                ...inputValues,
                                ...{ "password": event.target.value }
                            })
                        }} />
                    {formType == "registration" &&
                        <input
                            type="email"
                            placeholder="Почта"
                            value={inputValues["email"] == undefined ? "" : inputValues["email"]}
                            onChange={(event) => {
                                setInputValues({
                                    ...inputValues,
                                    ...{ "email": event.target.value }
                                })
                            }}
                            style={{ animation: "backInRight 0.75s linear" }}
                        />
                    }
                </div>

                {formType == "login" &&
                    <button className="login_button">Вход</button>}
                {formType == "registration" &&
                    <button className="registration_button">Регистрация</button>}

            </form>
        </div>
    )

}

export default LoginPage