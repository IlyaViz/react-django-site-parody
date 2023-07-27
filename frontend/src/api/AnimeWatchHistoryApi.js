import axios from 'axios'
import * as constants from './Constants'
import responseTypeEnum from '../enums/ResponseTypeEnum'


export default class AnimeWatchHistoryApi {
    
    static appendUserAnimeWatchHistory = (anime_id) => {
        const requestedUrl = constants.backendUrl + "append_user_anime_watch_history"
        const data = {
            "anime":anime_id
        }
        const responseData = axios.post(requestedUrl, data, constants.config)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

    static getUserAnimeWatchHistory = (page) => {
        const currentPage = page ? page : 1
        const requestedUrl = constants.backendUrl + "get_user_anime_watch_history" + `?page=${currentPage}`
        const responseData = axios.get(requestedUrl, constants.config)
            .then((response) => { 
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }
}