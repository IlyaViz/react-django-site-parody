import axios from 'axios'
import * as constants from './Constants'
import responseTypeEnum from '../enums/responseTypeEnum'


export default class TelegramUserApi {
    
    static createTelegramUser = (chat_id) => {
        const requestedUrl = constants.backendUrl + "create_telegram_user"
        const data = {
            "chat_id":chat_id
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

    static removeTelegramUser = () => {
        const requestedUrl = constants.backendUrl + "remove_telegram_user"
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