import axios from 'axios'
import responseTypeEnum from '../enums/ResponseTypeEnum.js'
import * as constants from './Constants.js'

const config = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}

export default class UserApi {

    static createUser = (username, password) => {
        const requestedUrl = constants.backendUrl + "create_user"
        const data = {
            username: username,
            password: password
        }
        const responseData = axios.post(requestedUrl, data, config)
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
        const responseData = axios.post(requestedUrl, data, config)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

    static getUserInfoByToken = (token) => {
        const requestedUrl = constants.backendUrl + "get_user_info_by_token"
        const data = {
            key: token
        }
        const responseData = axios.post(requestedUrl, data, config)
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }
}
