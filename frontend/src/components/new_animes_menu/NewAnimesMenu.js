import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import AnimeApi from '../../api/AnimeApi'
import animeCardTypeEnum from '../../enums/AnimeCardTypeEnum'
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import AnimeCard from '../anime_card/AnimeCard'
import './NewAnimesMenu.css'
import { jsonObjectArrayPrettification } from '../../utils/prettify'


const NewAnimesMenu = (props) => {
    const [animes, setAnimes] = useState([])
    const contentRef = useRef();
    const menuRef = useRef()

    const menuIsInView = useInView(menuRef, { once: true, margin: "0px 0px -100px 0px" })

    useEffect(() => {
        if (menuIsInView) {
            menuRef.current.style.visibility = "visible"
            menuRef.current.classList.add("animate__animated")
            if (screen.width > 900) {
                menuRef.current.classList.add("animate__fadeInRightBig")
            } else {
                menuRef.current.classList.add("animate__fadeInLeft")
            }
        }
    }, [menuIsInView])

    useEffect(() => {
        AnimeApi.getNewAnimes(10).then((res) => {
            if (res != responseTypeEnum.error) {
                const prettifiedArray = jsonObjectArrayPrettification(res)
                setAnimes(prettifiedArray)
            }
        })
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
        <div className='anime_in_watch' ref={menuRef}>
            <div className='anime_in_watch_header'>
                <p>Недавно вышли</p>
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
                            type={animeCardTypeEnum.small}
                            animeObject={anime}
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
    )

}

export default NewAnimesMenu