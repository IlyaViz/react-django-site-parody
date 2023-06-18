import React, { useState } from 'react'
import { Nav } from '../nav/Nav'
import { EntranceMenu } from '../entrance_menu/EntranceMenu'
import { AnimeInWatchMenu } from '../anime_in_watch_menu/AnimeInWatchMenu'
import './Home.css'

export const Home = () =>{
    const [animeInWatchMenuShown, setAnimeInWatchMenuShown] = useState(false)

    const background = animeInWatchMenuShown ? 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1) 75%)':'black'
    
    return (
        <div className='home'>
          <div className='entrance'>
            <Nav/>
            <EntranceMenu ShowAnimeInWatchMenu={() => setAnimeInWatchMenuShown(true)}/>
          </div>
          <div className='bottom_section' style={{background:background}}>
            <AnimeInWatchMenu shown={animeInWatchMenuShown}/>
          </div>
        </div>
    )
}