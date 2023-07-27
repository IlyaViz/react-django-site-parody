import axios from 'axios'
import responseTypeEnum from '../enums/ResponseTypeEnum.js'
import * as constants from './Constants.js'

export default class UserApi {
    
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

    static getPublicUserInfoById = (id) => {
        const requestedUrl = `${constants.backendUrl}get_public_user_info?id=${id}`
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
