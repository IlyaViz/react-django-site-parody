import { useEffect, useRef, useState } from 'react'
import { textPrettification } from '../../utils/prettify'
import './Episode.css'

export const Episode = (props) => {
    const { episodeNumber, name, episodeVideoUrl } = props
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
                <video src={episodeVideoUrl} ref={videoRef} controls />
            </div>
        </div>

    )
}