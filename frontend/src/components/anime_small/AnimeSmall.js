import './AnimeSmall.css'

export const AnimeSmall = (props) => {
    const { name, description, image_url } = props

    const textPrettification = (text, max_length) => {
        text = text[0].toUpperCase() + text.slice(1)
        if (text.length > max_length) {
            text = text.slice(0, max_length) + '...'
        }
        return text
    }

    const prettifiedDescription = textPrettification(description, 125)
    const prettifiedName = textPrettification(name, 30)
    const backgroundImage = 'url(' + image_url + ')'

    return (
        <div className='anime_component'>
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
