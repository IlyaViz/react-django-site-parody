import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AnimeApi from '../../api/AnimeApi'
import responseTypeEnum from '../../enums/response_type_enum/ResponseTypeEnum'
import animeCardTypeEnum from '../../enums/anime_card_type_num/AnimeCardTypeEnum'
import Episode from '../episode/Episode'
import AnimeCard from '../anime_card/AnimeCard'
import './AnimePage.css'

const AnimePage = () => {
    const [anime, setAnime] = useState({})
    const [episodesList, setEpisodesList] = useState([])
    const [animeExist, setAnimeExist] = useState(false)
    const { animeId } = useParams()

    useEffect(() => {
        AnimeApi.getEpisodes(animeId).then((res) => {
            if (res != responseTypeEnum.error) {
                setEpisodesList(res)
            }
        })
    }, [])

    useEffect(() => {
        AnimeApi.getAnime(animeId).then((res) => {
            if (res != responseTypeEnum.error) {
                setAnimeExist(true)
                setAnime(res)
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
                                id={anime.id}
                                type={animeCardTypeEnum.big}
                                name={anime.name}
                                description={anime.description}
                                image_url={anime.image}
                            />
                        </div>

                        <div className='episodes'>
                            {episodesList.length != 0 ?
                                episodesList.map((episode, index) => {
                                    return <Episode
                                        key={index}
                                        episodeNumber={episode.episode_number}
                                        name={episode.name}
                                        episodeVideoUrl={episode.episode_video_url}
                                    />
                                })
                                :
                                <p className='no_anime_error'> No episodes for this anime yet</p>
                            }
                        </div>
                    </div>
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