import { AnimeCard } from '../anime_card/AnimeCard'
import { animeCardTypeEnum } from '../../enums/anime_card_type_num/AnimeCardTypeEnum'
import { useRef, useEffect, useState } from 'react'
import { AnimeApi } from '../../api/AnimeApi'
import { responseTypeEnum } from '../../enums/response_type_enum/ResponseTypeEnum'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";
import './AnimeInWatchMenu.css'

export const AnimeInWatchMenu = (props) => {
    const [animes, setAnimes] = useState([])
    const contentRef = useRef();

    useEffect(() => {
        const updateAnimes = () => {
            AnimeApi.getNewAnimes(10).then((res) => {
                if (res != responseTypeEnum.error) {
                    setAnimes(res)
                }
            })
        }
        updateAnimes()
    }, [])

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
        <ScrollAnimation animateIn="showAnimation" duration={1}>
            <div className='anime_in_watch'>
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
                            return <AnimeCard
                                key={index}
                                id={anime.id}
                                type={animeCardTypeEnum.small}
                                name={anime.name}
                                description={anime.description}
                                image_url={anime.image}
                            />
                        })
                        }
                    </div>

                    <button className='control_button right_control_button' onClick={() => scrollMenu('right')}>
                        <div className='control_button_content'>
                            <span />
                        </div>
                    </button>
                </div>
            </div>
        </ScrollAnimation>
    )

}