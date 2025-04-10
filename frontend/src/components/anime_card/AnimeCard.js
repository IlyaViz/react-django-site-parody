import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { textPrettification } from '../../utils/prettify'
import UserApi from '../../api/UserApi'
import AnimeWatchHistoryApi from '../../api/AnimeWatchHistoryApi'
import FavouriteAnimeApi from '../../api/FavouriteAnimeApi'
import animeCardTypeEnum from '../../enums/animeCardTypeEnum'
import responseTypeEnum from '../../enums/responseTypeEnum'
import './AnimeSmallCard.css'
import './AnimeBigCard.css'

const AnimeCard = (props) => {
    const type = props.type
    const { id, name, description, image } = props.animeObject
    const [isFavourite, setisFavourite] = useState(false)
    const navigate = useNavigate()
    const navigationUrl = "/anime/" + id.toString()

    let descriptionMaxSize
    let nameMaxSize
    if (type == animeCardTypeEnum.small) {
        descriptionMaxSize = 125
        nameMaxSize = 30
    } else if (type == animeCardTypeEnum.big) {
        descriptionMaxSize = 300
        nameMaxSize = 100
    }

    const prettifiedDescription = textPrettification(description, descriptionMaxSize)
    const prettifiedName = textPrettification(name, nameMaxSize)
    const backgroundImage = 'url(' + image + ')'

    const onFavouriteButtonClick = () => {
        UserApi.validateLocalStorageToken().then((res) => {
            if (res == responseTypeEnum.error) {
                navigate("/login")
                return
            }
        })

        if (!isFavourite) {
            FavouriteAnimeApi.addUserFavouriteAnime(id).then((res) => {
                if (res != responseTypeEnum.error) {
                    setisFavourite(true)
                }
            })
        } else {
            FavouriteAnimeApi.removeUserFavouriteAnime(id).then((res) => {
                if (res != responseTypeEnum.error) {
                    setisFavourite(false)
                }
            })
        }
    }

    useEffect(() => {
        if (type == animeCardTypeEnum.big) {
            FavouriteAnimeApi.getUserFavouriteAnimes().then((res) => {
                if (res != responseTypeEnum.error) {
                    // check if current anime id is in favourite anime ids
                    res.map((animeObject) => {
                        if (animeObject.id == id) {
                            setisFavourite(true)
                        }
                    })
                }
            })
        }

    }, [isFavourite])

    useEffect(() => {
        if (type == animeCardTypeEnum.big) {
            AnimeWatchHistoryApi.appendUserAnimeWatchHistory(id)
        }
    }, [])

    return (
        <div className='anime-card'>
            {type == animeCardTypeEnum.small &&
                <div className='anime-small-card' onClick={() => navigate(navigationUrl)}>
                    <div className='anime-small-card__description'>
                        <p> {prettifiedDescription} </p>
                    </div>
                    <div className='anime-small-card__name'>
                        <p> {prettifiedName} </p>
                    </div>
                    <div className='anime-small-card__background' style={{ backgroundImage: backgroundImage }} />
                </div>}

            {type == animeCardTypeEnum.big &&
                <>
                    <div className='anime-big-card' onClick={() => navigate(navigationUrl)}>
                        <div className='anime-big-card__description'>
                            <p> {prettifiedDescription} </p>
                        </div>
                        <div className='anime-big-card__name'>
                            <p> {prettifiedName} </p>
                        </div>
                        <div className='anime-big-card__background' style={{ backgroundImage: backgroundImage }} />
                    </div>
                    <button className='anime-big-card__favourite-button' onClick={() => onFavouriteButtonClick()}>
                        <i className={isFavourite ? "gg-heart active" : "gg-heart"}></i>
                    </button>
                </>
            }
        </div>

    )
}

export default AnimeCard
