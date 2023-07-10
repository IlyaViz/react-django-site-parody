import axios from 'axios'
import responseTypeEnum from '../enums/ResponseTypeEnum.js'
import * as constants from './Constants.js'

export default class AnimeApi {

    static getAnime = (id) => {
        const requestedUrl = constants.backendUrl + "get_anime/" + id.toString()
        const responseData = axios.get(requestedUrl)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

    static getNewAnimes = (count) => {
        const requestedUrl = constants.backendUrl + "get_new_animes/" + count.toString()
        const responseData = axios.get(requestedUrl)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

    static getEpisodes = (animeId) => {
        const requestedUrl = constants.backendUrl + "get_episodes/" + animeId.toString()
        const responseData = axios.get(requestedUrl)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

    static searchAnimeByNamePart = (namePart) => {
        const requestedUrl = constants.backendUrl + "search_anime_by_name/" + namePart
        const responseData = axios.get(requestedUrl)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

}