import { useRef, useState } from 'react'
import { textPrettification } from '../../utils/prettify'
import './Episode.css'

const Episode = (props) => {
    const { episodeNumber, name, episode } = props.episodeObject
    const [videoShown, setVideoShown] = useState(false)
    const videoRef = useRef()

    const displayType = videoShown ? "block" : "none"

    const prettifiedName = textPrettification(name, 45)

    const showOrHideVideo = () => {
        setVideoShown(!videoShown)
        videoRef.current.pause()
    }

    return (
        <div className='episode' >
            <div className='episode_info' onClick={() => showOrHideVideo()}>
                <div className='episode_number'> {episodeNumber} </div>
                <div className='episode_name'> {prettifiedName} </div>
            </div>
            <div className='episode_video' style={{ display: displayType }}>
                <video src={episode} ref={videoRef} controls />
            </div>
        </div>

    )
}

export default Episode