import { useEffect, useState } from "react"
import { jsonObjectArrayPrettification, jsonObjectPrettification } from "../../utils/Prettify"
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import UserApi from "../../api/UserApi"
import AnimeCard from "../anime_card/AnimeCard"
import AnimeApi from "../../api/AnimeApi"
import SearchBar from "../search_bar/SearchBar"
import Comment from "../comment/Comment"
import CommentApi from "../../api/CommentApi"
import CommentMenu from "../comment_menu/CommentMenu"
import commentTypeEnum from "../../enums/CommentTypeEnum"

const Test = () => {

    return (
        <CommentMenu type={commentTypeEnum.anime} commentedObjectId={7} />
    )
}

export default Test