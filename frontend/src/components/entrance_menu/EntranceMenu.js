import './EntranceMenu.css'

export const EntranceMenu = (props) => {
    const { ShowAnimeInWatchMenu } = props

    const onClick = (event) => {
        ShowAnimeInWatchMenu()
        setTimeout(() => window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth"
        }), 100)
        event.target.style.animation = "buttonDisappear 0.3s linear forwards"
    }

    return (
        <div>
            <div className="entrance_text">
                <h1 className="entrance_main_text">Смотри аниме на AniType</h1>
                <h4 className="entrance_extra_text">Огромное количество релизов с озвучкой от любимых студий, современный дизайн и не только, зарегистрируйся прямо сейчас</h4>
            </div>

            <div className='entrance_main'>
                <button className='entrance_button'>
                    <img src="../../../images/arrow.png" alt='' onClick={onClick}></img>
                </button>
            </div>
        </div>
    )
}