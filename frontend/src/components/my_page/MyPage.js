import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../nav/Nav'
import AnimeCard from '../anime_card/AnimeCard'
import animeCardTypeEnum from '../../enums/AnimeCardTypeEnum'
import UserApi from '../../api/UserApi.js'
import './MyPage.css'
import responseTypeEnum from '../../enums/ResponseTypeEnum.js'

const MyPage = () => {

    const [selectedButton, setSelectedButton] = useState("Последние просмотры")
    const [animeList, setAnimeList] = useState([])

    useEffect(() => {
        setAnimeList([])
        switch (selectedButton) {
            case "Последние просмотры":
                UserApi.getUserAnimeWatchHistory().then((res) => {
                    if (res != responseTypeEnum.error) {
                        setAnimeList(res)
                    }
                })
                break;

            case "Любимые":
                UserApi.getUserFavouriteAnimes().then((res) => {
                    if (res != responseTypeEnum.error) {
                        console.log(res)
                        setAnimeList(res)
                    }
                })
                break;
        }


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

            <div className='my_animes'>
                {animeList.map((anime) => {
                    return <AnimeCard
                        type={animeCardTypeEnum.small}
                        animeObject={anime}
                    />
                })}

            </div>
        </div >
    )

}

export default MyPage