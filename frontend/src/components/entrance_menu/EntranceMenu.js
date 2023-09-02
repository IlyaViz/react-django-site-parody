import './EntranceMenu.css'

const EntranceMenu = () => {

    return (
        <div className='entrance-menu'>
            <div className='entrance-menu__text'>
                <h1 className='entrance-menu__main-text animate__animated animate__bounceInUp'>
                    Смотри аниме на пародии <span className='entrance-menu__main-text--highlight'>AniType</span>
                </h1>
                <h4 className='entrance-menu__extra-text animate__animated animate__bounceInUp'>
                    Огромное количество релизов с озвучкой от любимых студий, не очень современный дизайн и не только, зарегистрируйся прямо сейчас
                </h4>
            </div>
        </div>
    )
}

export default EntranceMenu