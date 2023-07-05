import './EntranceMenu.css'

const EntranceMenu = (props) => {
    const { setAnimeInWatchMenuShown } = props

    return (
        <div>
            <div className="entrance_text">
                <h1 className="entrance_main_text animate__animated animate__bounceInUp">Смотри аниме на пародии <span>AniType</span></h1>
                <h4 className="entrance_extra_text animate__animated animate__bounceInUp">Огромное количество релизов с озвучкой от любимых студий, не очень современный дизайн и не только, зарегистрируйся прямо сейчас</h4>
            </div>
        </div>
    )
}

export default EntranceMenu