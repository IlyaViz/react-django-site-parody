import React, { useState } from 'react'
import Nav from '../nav/Nav'
import EntranceMenu from '../entrance_menu/EntranceMenu'
import NewAnimesMenu from '../new_animes_menu/NewAnimesMenu'
import './Home.css'

const Home = () => {
  const [animeInWatchMenuShown, setAnimeInWatchMenuShown] = useState(false)

  return (
    <div className='home'>
      <div className='entrance'>
        <Nav />
        <EntranceMenu ShowAnimeInWatchMenu={() => setAnimeInWatchMenuShown(true)} />
      </div>
      <div className='bottom_section'>
        <NewAnimesMenu />
      </div>
    </div>
  )
}

export default Home