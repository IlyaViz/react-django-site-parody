import { useNavigate } from 'react-router-dom'
import { textPrettification } from '../../utils/prettify'
import { animeCardTypeEnum } from '../../enums/anime_card_type_num/AnimeCardTypeEnum'
import './AnimeSmallCard.css'
import './AnimeBigCard.css'

export const AnimeCard = (props) => {
    const { id, type, name, description, image_url } = props
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
    const backgroundImage = 'url(' + image_url + ')'

    return (
        <>
            {type == animeCardTypeEnum.small &&
                <div className='anime_small_component' onClick={() => navigate(navigationUrl)}>
                    <div className='anime_small_component_description'>
                        <p> {prettifiedDescription} </p>
                    </div>
                    <div className='anime_small_component_name'>
                        <p> {prettifiedName} </p>
                    </div>
                    <div className='anime_small_component_background' style={{ backgroundImage: backgroundImage }} />
                </div>}

            {type == animeCardTypeEnum.big &&
                <div className='anime_big_component' onClick={() => navigate(navigationUrl)}>
                    <div className='anime_big_component_description'>
                        <p> {prettifiedDescription} </p>
                    </div>
                    <div className='anime_big_component_name'>
                        <p> {prettifiedName} </p>
                    </div>
                    <div className='anime_big_component_background' style={{ backgroundImage: backgroundImage }} />
                </div>
            }
        </>

    )
}
