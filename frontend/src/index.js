import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Nav } from './components/nav/Nav'
import { EntranceMenu } from './components/entrance_menu/EntranceMenu'
import { AnimeInWatchMenu } from './components/anime_in_watch_menu/AnimeInWatchMenu'
import './index.css'

const App = () => {
  const [animeInWatchMenuShown, setAnimeInWatchMenuShown] = useState(false)

  return(
    <div className='app'>
      <div className='entrance'>
        <Nav/>
        <EntranceMenu ShowAnimeInWatchMenu={() => setAnimeInWatchMenuShown(true)}/>
      </div>
      <div className='bottom_section'>
        <AnimeInWatchMenu shown={animeInWatchMenuShown}/>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);
