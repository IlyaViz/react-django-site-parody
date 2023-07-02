import { useEffect } from "react"
import { jsonObjectArrayPrettification, jsonObjectPrettification } from "../../utils/Prettify"
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import UserApi from "../../api/UserApi"
import AnimeCard from "../anime_card/AnimeCard"
import AnimeApi from "../../api/AnimeApi"

const Test = () => {

    useEffect(() => {
        UserApi.validateLocalStorageToken().then((res) => {
            if (res != responseTypeEnum.error) {
                console.log(res)
            }
        })
    }, [])

    return (
        1
    )
}

export default Test