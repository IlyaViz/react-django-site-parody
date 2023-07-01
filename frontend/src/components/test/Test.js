import { useEffect } from "react"
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import UserApi from "../../api/UserApi"
import AnimeCard from "../anime_card/AnimeCard"
import AnimeApi from "../../api/AnimeApi"
import { jsonObjectArrayPrettification, jsonObjectPrettification } from "../../utils/Prettify"

const Test = () => {

    useEffect(() => {
        AnimeApi.getEpisodes(7).then((res) => {
            if (res != responseTypeEnum.error) {
                console.log(jsonObjectArrayPrettification(res))
            }
        })
    }, [])

    return (
        <AnimeCard
            key={index}
            animeObject={anime}
        />
    )
}

export default Test