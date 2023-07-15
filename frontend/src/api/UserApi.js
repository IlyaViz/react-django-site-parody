import axios from 'axios'
import responseTypeEnum from '../enums/ResponseTypeEnum.js'
import * as constants from './Constants.js'

export default class UserApi {
    /* in some methods we need to have User 
    for backend side. User is automatically
    gotten on backend by token in our config 
    in constants */
    static createUser = (username, password) => {
        const requestedUrl = constants.backendUrl + "create_user"
        const data = {
            username: username,
            password: password
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

    static getToken = (username, password) => {
        const requestedUrl = constants.backendUrl + "get_token"
        const data = {
            username: username,
            password: password
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

    static validateLocalStorageToken = () => {
        const requestedUrl = constants.backendUrl + "validate_token"
        const responseData = axios.get(requestedUrl, constants.config)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

    static getPrivateUserInfo = () => {
        const requestedUrl = constants.backendUrl + "get_private_user_info"
        const responseData = axios.get(requestedUrl, constants.config)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

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

    static getUserAnimeWatchHistory = () => {
        const requestedUrl = constants.backendUrl + "get_user_anime_watch_history"
        const responseData = axios.get(requestedUrl, constants.config)
            .then((response) => { 
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

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

    static getUserFavouriteAnimes = () => {
        const requestedUrl = constants.backendUrl + "get_user_favourite_animes"
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
