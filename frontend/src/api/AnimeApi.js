import axios from 'axios'
import { responseTypeEnum } from '../enums/response_type_enum/ResponseTypeEnum.js'

const backendUrl = "http://127.0.0.1:8000/api/"

export class AnimeApi {

    static getAnime = (id) => {
        const requestedUrl = backendUrl + "get_anime/" + id.toString()
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
        const requestedUrl = backendUrl + "get_new_animes/" + count.toString()
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
        const requestedUrl = backendUrl + "get_episodes/" + animeId.toString()
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