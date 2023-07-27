import axios from 'axios'
import * as constants from './Constants'
import responseTypeEnum from '../enums/ResponseTypeEnum'


export default class FavouriteAnimeApi {
    
    static addUserFavouriteAnime = (anime_id) => {
        const requestedUrl = constants.backendUrl + "add_user_favourite_anime"
        const data = {
            "anime": anime_id
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

    static getUserFavouriteAnimes = (page) => {
        const currentPage = page ? page : 1
        const requestedUrl = constants.backendUrl + "get_user_favourite_animes" + `?page=${currentPage}`
        const responseData = axios.get(requestedUrl, constants.config)
            .then((response) => { 
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

    static removeUserFavouriteAnime = (anime_id) => {
        const requestedUrl = constants.backendUrl + "remove_user_favourite_anime/" + anime_id.toString()
        const responseData = axios.delete(requestedUrl, constants.config)
            .then((response) => { 
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

}