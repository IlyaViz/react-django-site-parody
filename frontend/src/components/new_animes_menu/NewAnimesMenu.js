import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { jsonObjectArrayPrettification } from '../../utils/prettify'
import AnimeApi from '../../api/AnimeApi'
import animeCardTypeEnum from '../../enums/animeCardTypeEnum'
import responseTypeEnum from '../../enums/responseTypeEnum'
import AnimeCard from '../anime_card/AnimeCard'
import './NewAnimesMenu.css'

const NewAnimesMenu = () => {
    const [animes, setAnimes] = useState([])
    const contentRef = useRef();
    const menuRef = useRef()

    const menuIsInView = useInView(menuRef, { once: true, margin: "0px 0px -100px 0px" })

    useEffect(() => {
        if (menuIsInView) {
            menuRef.current.style.visibility = "visible"
            menuRef.current.classList.add("animate__animated")
            if (window.screen.width > 900) {
                menuRef.current.classList.add("animate__fadeInRightBig")
            } else {
                menuRef.current.classList.add("animate__fadeInLeft")
            }
        }
    }, [menuIsInView])

    useEffect(() => {
        AnimeApi.getNewAnimes().then((res) => {
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
        <div className='new-animes-menu' ref={menuRef}>
            <div className='new-animes-menu__header'>
                <p>Недавно вышли</p>
            </div>

            <div className='new-animes-menu__menu'>
                <button className='new-animes-menu__control-button new-animes-menu__control-button--left' onClick={() => scrollMenu('left')}>
                    <div className='new-animes-menu__control-button-content'>
                        <span />
                    </div>
                </button>

                <div className='new-animes-menu__menu-content' ref={contentRef}>
                    {animes.map((anime, index) => {
                        return <AnimeCard
                            key={index}
                            type={animeCardTypeEnum.small}
                            animeObject={anime}
                        />;
                    })}
                </div>

                <button className='new-animes-menu__control-button new-animes-menu__control-button--right' onClick={() => scrollMenu('right')}>
                    <div className='new-animes-menu__control-button-content'>
                        <span />
                    </div>
                </button>
            </div>
        </div>
    )

}

export default NewAnimesMenu