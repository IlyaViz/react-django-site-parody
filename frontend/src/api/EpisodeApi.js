import axios from 'axios'
import * as constants from './Constants'
import responseTypeEnum from '../enums/responseTypeEnum'

export default class EpisodeApi {

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
}