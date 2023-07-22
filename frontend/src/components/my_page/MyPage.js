import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import Nav from '../nav/Nav'
import AnimeCard from '../anime_card/AnimeCard'
import animeCardTypeEnum from '../../enums/AnimeCardTypeEnum'
import UserApi from '../../api/UserApi.js'
import responseTypeEnum from '../../enums/ResponseTypeEnum.js'
import './MyPage.css'

const MyPage = () => {
    const [selectedButton, setSelectedButton] = useState("Последние просмотры")
    const [animes, setAnimes] = useState([])
    const [page, setPage] = useState(2)
    const [hasMoreAnimes, setHasMoreAnimes] = useState(true)

    const fetchAnimes = () => {
        switch (selectedButton) {
            case "Последние просмотры":
                UserApi.getUserAnimeWatchHistory(page).then((res) => {
                    if (res != responseTypeEnum.error) {
                        setAnimes(animes.concat(res))
                        setPage(page + 1)
                    } else {
                        setHasMoreAnimes(false)
                    }
                })
                break

            case "Любимые":
                UserApi.getUserFavouriteAnimes(page).then((res) => {
                    if (res != responseTypeEnum.error) {
                        setAnimes(animes.concat(res))
                        setPage(page + 1)
                    } else {
                        setHasMoreAnimes(false)
                    }
                })
                break
        }
    }

    useEffect(() => {
        setHasMoreAnimes(true)
        setAnimes([])
        switch (selectedButton) {
            case "Последние просмотры":
                UserApi.getUserAnimeWatchHistory(1).then((res) => {
                    if (res != responseTypeEnum.error) {
                        setAnimes(res)
                    }
                })
                break

            case "Любимые":
                UserApi.getUserFavouriteAnimes(1).then((res) => {
                    if (res != responseTypeEnum.error) {
                        setAnimes(res)
                    }
                })
                break
        }
        setPage(2)
    }, [selectedButton])

    return (
        <div className='my_page'>
            <Nav />
            <div className='activity_type_buttons'>
                <button
                    className={selectedButton == "Последние просмотры" ? "selected_button" : ""}
                    onClick={() => { setSelectedButton("Последние просмотры") }}>
                    {window.innerWidth > 1200 ?
                        <p>Последние просмотры</p>
                        :
                        <p>Смотрели</p>
                    }
                </button>

                <button
                    className={selectedButton == "Любимые" ? "selected_button" : ""}
                    onClick={() => { setSelectedButton("Любимые") }}>
                    Любимые
                </button>
            </div>

            <InfiniteScroll
                useWindow={false}
                pageStart={0}
                loadMore={fetchAnimes}
                hasMore={hasMoreAnimes}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                <div className='my_animes'>
                    {animes.map((anime, index) => {
                        return <AnimeCard
                            key={index}
                            type={animeCardTypeEnum.small}
                            animeObject={anime}
                        />
                    })}
                </div>
            </InfiniteScroll>
        </div >
    )

}

export default MyPage