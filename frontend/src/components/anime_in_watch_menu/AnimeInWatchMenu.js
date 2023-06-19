import { AnimeSmall } from '../anime_small/AnimeSmall'
import { animes } from '../../fake_data/animes'
import { useRef } from 'react'
import './AnimeInWatchMenu.css'

export const AnimeInWatchMenu = (props) => {
    const contentRef = useRef();
    const displayType = props.shown ? "block" : "none"

    // logic goes here
    const getAnime = () => {
        return animes
    }

    const scrollMenu = (side) => {
        const AnimeSmallWidth = contentRef.current.firstChild.offsetWidth

        if (side == 'left') {
            contentRef.current.scrollLeft -= AnimeSmallWidth
        } else if (side == 'right') {
            contentRef.current.scrollLeft += AnimeSmallWidth
        }
        console.log(contentRef.current.scrollLeft)
    }

    return (
        <div className='anime_in_watch' style={{ display: displayType }}>
            <div className='anime_in_watch_header'>
                <p>Сейчас смотрят</p>
            </div>

            <div className='anime_in_watch_menu'>
                <button className='control_button left_control_button' onClick={() => scrollMenu('left')}>
                    <div className='control_button_content'>
                        <span />
                    </div>
                </button>

                <div className='anime_in_watch_menu_content' ref={contentRef}>
                    {animes.map((anime, index) => {
                        return <AnimeSmall
                            key={index}
                            name={anime.name}
                            description={anime.description}
                            image_url={anime.image_url}
                        />
                    })}
                </div>

                <button className='control_button right_control_button' onClick={() => scrollMenu('right')}>
                    <div className='control_button_content'>
                        <span />
                    </div>
                </button>
            </div>
        </div>
    )

}