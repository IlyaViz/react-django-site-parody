import axios from 'axios'
import * as constants from './Constants'
import responseTypeEnum from '../enums/responseTypeEnum'


export default class AnimeDistributionSubscription {

    static subscribeAnimeDistribution = (anime_id) => {
        const requestedUrl = constants.backendUrl + "subscribe_anime_distribution"
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

    static unsubscribeAnimeDistribution = (anime_id) => {
        const requestedUrl = constants.backendUrl + "unsubscribe_anime_distribution/"  + anime_id.toString()
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
