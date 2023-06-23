import { useNavigate } from 'react-router-dom'
import { textPrettification } from '../../utils/prettify'
import './AnimeSmall.css'

export const AnimeSmall = (props) => {
    const { id, name, description, image_url } = props
    const navigate = useNavigate()
    const navigationUrl = "/anime/" + id.toString()

    const prettifiedDescription = textPrettification(description, 125)
    const prettifiedName = textPrettification(name, 30)
    const backgroundImage = 'url(' + image_url + ')'

    return (
        <div className='anime_component' onClick={() => navigate(navigationUrl)}>
            <div className='anime_component_description'>
                <p> {prettifiedDescription} </p>
            </div>
            <div className='anime_component_name'>
                <p> {prettifiedName} </p>
            </div>
            <div className='anime_component_background' style={{ backgroundImage: backgroundImage }} />
        </div>
    )
}
