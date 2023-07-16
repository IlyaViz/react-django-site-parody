import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { jsonObjectArrayPrettification, jsonObjectPrettification } from '../../utils/Prettify'
import AnimeApi from '../../api/AnimeApi'
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import animeCardTypeEnum from '../../enums/AnimeCardTypeEnum'
import CommentMenu from '../comment_menu/CommentMenu'
import Episode from '../episode/Episode'
import AnimeCard from '../anime_card/AnimeCard'
import commentTypeEnum from '../../enums/CommentTypeEnum'
import './AnimePage.css'

const AnimePage = () => {
    const [anime, setAnime] = useState({})
    const [episodes, setEpisodes] = useState([])
    const [animeExist, setAnimeExist] = useState(false)
    const { animeId } = useParams()

    useEffect(() => {
        AnimeApi.getEpisodes(animeId).then((res) => {
            if (res != responseTypeEnum.error) {
                const prettifiedArray = jsonObjectArrayPrettification(res)
                setEpisodes(prettifiedArray)
            }
        })
    }, [])

    useEffect(() => {
        AnimeApi.getAnime(animeId).then((res) => {
            if (res != responseTypeEnum.error) {
                const prettifiedObject = jsonObjectPrettification(res)
                setAnimeExist(true)
                setAnime(prettifiedObject)
            }
        })
    }, [])

    return (
        <>
            {animeExist ?
                <div className='anime_page'>
                    <div className='anime_page_content'>
                        <div className='anime'>
                            <AnimeCard
                                type={animeCardTypeEnum.big}
                                animeObject={anime}
                            />
                        </div>

                        <div className='episodes'>
                            {episodes.length != 0 ?
                                episodes.map((episode, index) => {
                                    return <Episode
                                        key={index}
                                        episodeObject={episode}
                                    />
                                })
                                :
                                <p className='no_anime_error'> No episodes for this anime yet</p>
                            }
                        </div>
                    </div>
                    <CommentMenu
                        type={commentTypeEnum.anime}
                        commentedObjectId={animeId}
                    />
                </div>
                :
                <div className='no_anime_error'>
                    Anime not found
                </div>
            }
        </>
    )
}

export default AnimePage