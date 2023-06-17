import './AnimeSmall.css'

export const AnimeSmall = (props) => {
    const { name, description, image_url } = props
    const backgroundImage = 'url(' + image_url + ')'

    return(
        <div className='anime_component' style={{backgroundImage:backgroundImage}}/>
    )
}