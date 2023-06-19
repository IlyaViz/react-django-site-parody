import './AnimeSmall.css'

export const AnimeSmall = (props) => {
    const { name, description, image_url } = props
    const descriptionPrettified = description[0].toUpperCase() + description.slice(1)
    const backgroundImage = 'url(' + image_url + ')'

    return (
        <div className='anime_component'>
            <div className='anime_component_description'>
                <p> {descriptionPrettified} </p>
            </div>
            <div className='anime_component_background' style={{ backgroundImage: backgroundImage }} />
        </div>
    )
}
