import "./Login.css"
import { useState } from "react"

const Login = () => {
    const [formType, setFormType] = useState("login")

    return (
        <div className="login_page">
            <form className="login_form" onSubmit={() => console.log(1)}>
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
                    <input placeholder="Имя пользователя" />
                    <input placeholder="Пароль" />
                    {formType == "registration" &&
                        <input placeholder="Почта" style={{animation:"backInRight 0.75s linear"}} />
                    }
                </div>
            </form>
        </div>
    )

}

export default Login