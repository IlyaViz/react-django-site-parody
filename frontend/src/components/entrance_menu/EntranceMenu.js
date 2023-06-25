import './EntranceMenu.css'

export const EntranceMenu = (props) => {
    const { setAnimeInWatchMenuShown } = props

    const onClick = (event) => {
        setAnimeInWatchMenuShown()
        setTimeout(() => window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth"
        }), 100)
        event.target.style.animation = "buttonDisappear 0.3s linear forwards"
    }

    return (
        <div>
            <div className="entrance_text">
                <h1 className="entrance_main_text animate__animated animate__bounceInUp">Смотри аниме на <span>AniType</span></h1>
                <h4 className="entrance_extra_text animate__animated animate__bounceInUp">Огромное количество релизов с озвучкой от любимых студий, современный дизайн и не только, зарегистрируйся прямо сейчас</h4>
            </div>
        </div>
    )
}