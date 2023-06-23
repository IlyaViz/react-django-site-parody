import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AnimeApi } from '../../api/AnimeApi'
import { Episode } from '../episode/Episode'
import { AnimeSmall } from '../anime_small/AnimeSmall'
import { responseTypeEnum } from '../../enums/response_type_enum/responseTypeEnum'
import './AnimePage.css'

export const AnimePage = () => {
    const [anime, setAnime] = useState({})
    const [episodesList, setEpisodesList] = useState([])
    const [animeExist, setAnimeExist] = useState(false)
    const { animeId } = useParams()

    useEffect(() => {
        const updateEpisodeList = () => {
            AnimeApi.getEpisodes(animeId).then((res) => {
                if (res != responseTypeEnum.error) {
                    setEpisodesList(res)
                }
            })
        }
        updateEpisodeList()
    }, [])

    useEffect(() => {
        const updateAnime = () => {
            AnimeApi.getAnime(animeId).then((res) => {
                if (res != responseTypeEnum.error) {
                    setAnimeExist(true)
                    setAnime(res)
                }
            })
        }
        updateAnime()
    }, [])

    return (
        <>
            {animeExist ?
                <div className='anime_page'>
                    <div className='anime_page_content'>
                        <div className='anime'>
                            <AnimeSmall
                                id={anime.id}
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
                                        episodeVideoUrl={episode.episode}
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