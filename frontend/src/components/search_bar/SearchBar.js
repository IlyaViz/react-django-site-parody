import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimeApi from '../../api/AnimeApi'
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import './SearchBar.css'


const SearchBar = (props) => {
    const { showParentComponents } = props /* function or something else */
    const [opened, setOpened] = useState(false)
    const [animes, setAnimes] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const inputRef = useRef()

    const openBar = () => {
        try {
            showParentComponents(false)
        } catch (e) { }
        setOpened(true)
        setTimeout(() => inputRef.current.focus(), 100)
    }

    const closeBar = () => {
        setTimeout(() => {
            try {
                showParentComponents(true)
            } catch (e) { }
            setOpened(false)
            setAnimes([])
        }, 100)
    }

    useEffect(() => {
        AnimeApi.searchAnimeByNamePart(searchQuery).then((res) => {
            if (res != responseTypeEnum.error) {
                setAnimes(res)
            } else {
                setAnimes([])
            }
        })

    }, [searchQuery])

    return (
        <div className='search_bar'>
            {!opened && <i className="gg-search" onClick={() => openBar()}></i>}
            {opened && <input placeholder='Запрос'
                ref={inputRef}
                onChange={(event) => setSearchQuery(event.target.value)}
                onBlur={() => closeBar()} />}

            {opened && animes.length != 0 &&
                <div className='search_result'>
                    <div className='search_result_content'>
                        {animes.map((anime, index) => {
                            return <Link to={`/anime/${anime.id}`}> {anime.name} </Link>
                        })
                        }
                    </div>

                </div>
            }

        </div>
    )
}

export default SearchBar