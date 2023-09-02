import { useEffect, useState, useRef } from 'react'
import { jsonObjectPrettification } from '../../utils/prettify'
import Nav from '../nav/Nav'
import UserApi from '../../api/UserApi'
import TelegramUserApi from '../../api/TelegramUserApi'
import responseTypeEnum from '../../enums/responseTypeEnum'
import './ProfilePage.css'

const ProfilePage = () => {
    const [inputValues, setInputValues] = useState({})
    const [settingsAnimated, setSettingsAnimated] = useState(false)
    const settingsRef = useRef()

    const animateSettings = (animation, animationTimeSec) => {
        if (!settingsAnimated) {
            settingsRef.current.style.animation = `${animation} ${animationTimeSec}s linear`
            setSettingsAnimated(true)
            setTimeout(() => {
                settingsRef.current.style.animation = ""
                setSettingsAnimated(false)
            }, animationTimeSec * 1000)
        }
    }

    const onTelegramFormSubmit = (event) => {
        event.preventDefault()
        const { chatId } = inputValues

        if (!settingsAnimated) {
            TelegramUserApi.removeTelegramUser().then(() => {
                TelegramUserApi.createTelegramUser(chatId).then((res) => {
                    if (res != responseTypeEnum.error) {
                        animateSettings("successAnimation", 1.25)
                    } else {
                        animateSettings("failureAnimation", 1.25)
                    }
                })
            })
        }

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
        <div className='profile-page'>
            <Nav />
            <div className='profile-page__content'>
                <div className='settings' ref={settingsRef}>
                    <h1 className='settings__title'>Настройки</h1>
                    <div className='settings__sections'>
                        <form className='telegram-form' onSubmit={(event) => onTelegramFormSubmit(event)}>
                            <section className='settings__section'>Телеграм</section>
                            <input
                                value={inputValues.chatId === undefined ? '' : inputValues.chatId}
                                onChange={(event) => {
                                    setInputValues({
                                        ...inputValues,
                                        chatId: event.target.value,
                                    });
                                }}
                                placeholder='Введите ваш id с ботом'
                            />
                            <button className='telegram-form__button'>Сохранить</button>
                            <br />
                            <a href='https://t.me/test_ilya_python_bot' className='telegram-form__link'>
                                Наш чат бот
                            </a>
                        </form>
                    </div>
                    <button className='settings__logout-button' onClick={() => onLogoutButtonClick()}>
                        Выйти
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage