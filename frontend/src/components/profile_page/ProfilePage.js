import { useEffect, useState } from 'react'
import { jsonObjectPrettification } from '../../utils/Prettify'
import Nav from '../nav/Nav'
import UserApi from '../../api/UserApi'
import TelegramUserApi from '../../api/TelegramUserApi'
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import './ProfilePage.css'

const ProfilePage = () => {
    const [inputValues, setInputValues] = useState({})

    const onTelegramFormSubmit = (event) => {
        event.preventDefault()
        const { chatId } = inputValues

        TelegramUserApi.removeTelegramUser()
        setTimeout(() => TelegramUserApi.createTelegramUser(chatId).then((res) => {
            if (res != responseTypeEnum.error) {
                event.target.style.animation = "successAnimation 1s linear"
                setTimeout(() => {
                    event.target.style.animation = ""
                }, 1000)
            } else {
                event.target.style.animation = "failureAnimation 1s linear"
                setTimeout(() => {
                    event.target.style.animation = ""
                }, 1000)
            }
        }), 250)
    }

    const onLogoutButtonClick = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }

    useEffect(() => {
        UserApi.getPrivateUserInfo().then((res) => {
            if (res != responseTypeEnum.error) {
                const user = jsonObjectPrettification(res)
                setInputValues({
                    ...inputValues,
                    ...{ "chatId": user.telegramChatId }
                })
            }
        })
    }, [])

    return (
        <div className='profile_page'>
            <Nav />
            <div className='profile_page_content'>
                <div className='settings'>
                    <h1> Настройки </h1>
                    <div className='settings_sections'>
                        <form className='telegram_form' onSubmit={(event) => onTelegramFormSubmit(event)}>
                            <section> Телеграм </section>
                            <input
                                value={inputValues["chatId"] == undefined ? "" : inputValues["chatId"]}
                                onChange={(event) => {
                                    setInputValues({
                                        ...inputValues,
                                        ...{ "chatId": event.target.value }
                                    })
                                }}
                                placeholder='Введите ваш id с ботом' />
                            <button> Сохранить </button>
                            <br />
                            <a href='https://t.me/test_ilya_python_bot'> Наш чат бот</a>
                        </form>
                    </div>
                    <button className='logout_button' onClick={() => onLogoutButtonClick()}> Выйти </button>
                </div>
            </div>

        </div>
    )
}

export default ProfilePage