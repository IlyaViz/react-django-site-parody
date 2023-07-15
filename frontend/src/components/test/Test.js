import { useEffect } from "react"
import { jsonObjectArrayPrettification, jsonObjectPrettification } from "../../utils/Prettify"
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import UserApi from "../../api/UserApi"
import AnimeCard from "../anime_card/AnimeCard"
import AnimeApi from "../../api/AnimeApi"
import SearchBar from "../search_bar/SearchBar"
import CommentApi from "../../api/CommentApi"

const Test = () => {

    useEffect(() => {
        CommentApi.addComment("anime", 7, "Top anime").then((res) => {
            console.log(res)
        })
    })

    return (
        <SearchBar /> 
    )
}

export default Test