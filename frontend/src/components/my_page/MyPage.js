import { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import AnimeCard from '../anime_card/AnimeCard'
import animeCardTypeEnum from '../../enums/animeCardTypeEnum'
import AnimeWatchHistoryApi from '../../api/AnimeWatchHistoryApi'
import FavouriteAnimeApi from '../../api/FavouriteAnimeApi'
import responseTypeEnum from '../../enums/responseTypeEnum.js'
import './MyPage.css'

const MyPage = () => {
    const [selectedButton, setSelectedButton] = useState("Последние просмотры")
    const [animes, setAnimes] = useState([])
    const [page, setPage] = useState(2)
    const [hasMoreAnimes, setHasMoreAnimes] = useState(true)

    const fetchAnimes = () => {
        if (selectedButton == "Последние просмотры") {
            AnimeWatchHistoryApi.getUserAnimeWatchHistory(page).then((res) => {
                if (res != responseTypeEnum.error) {
                    setAnimes(animes.concat(res))
                    setPage(page + 1)
                } else {
                    setHasMoreAnimes(false)
                }
            })
        } else if (selectedButton == "Любимые") {
            FavouriteAnimeApi.getUserFavouriteAnimes(page).then((res) => {
                if (res != responseTypeEnum.error) {
                    setAnimes(animes.concat(res))
                    setPage(page + 1)
                } else {
                    setHasMoreAnimes(false)
                }
            })
        }
    }

    useEffect(() => {
        setHasMoreAnimes(true)
        setAnimes([])
        if (selectedButton == "Последние просмотры") {
            AnimeWatchHistoryApi.getUserAnimeWatchHistory(1).then((res) => {
                if (res != responseTypeEnum.error) {
                    setAnimes(res)
                }
            })
        } else if (selectedButton == "Любимые") {
            FavouriteAnimeApi.getUserFavouriteAnimes(1).then((res) => {
                if (res != responseTypeEnum.error) {
                    setAnimes(res)
                }
            })
        }
        setPage(2)
    }, [selectedButton])

    return (
        <div className='my-page'>
            <Nav />
            <div className='my-page__content'>
                <div className='my-page__activity-type-buttons'>
                    <button
                        className={selectedButton === "Последние просмотры" ? "active" : ""}
                        onClick={() => { setSelectedButton("Последние просмотры"); }}>
                        {window.innerWidth > 1200 ?
                            <p>Последние просмотры</p>
                            :
                            <p>Смотрели</p>
                        }
                    </button>

                    <button
                        className={selectedButton === "Любимые" ? "active" : ""}
                        onClick={() => { setSelectedButton("Любимые"); }}>
                        Любимые
                    </button>
                </div>

                <div className='my-page__my-animes'>
                    {animes.map((anime, index) => {
                        return <AnimeCard
                            key={index}
                            type={animeCardTypeEnum.small}
                            animeObject={anime}
                        />;
                    })}

                </div>
                {hasMoreAnimes &&
                    <button
                        className='my-page__load-more-button'
                        onClick={() => fetchAnimes()}>
                        Загрузить ещё
                    </button>
                }
            </div>
        </div>
    )

}

export default MyPage