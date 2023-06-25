import axios from 'axios'
import responseTypeEnum from '../enums/response_type_enum/responseTypeEnum.js'
import * as constants from './Constants.js'

export class UserApi {

    static createUser = (username, password) => {
        const requestedUrl = constants.backendUrl + "create_user"
        const responseData = axios.post(requestedUrl, {
            username: username,
            password: password
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

    // finish later
    static getToken = (username, password) => {
        const requestedUrl = constants.backendUrl + "get_token"
        const responseData = axios.post(requestedUrl, {
            username: username,
            password: password
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }
    //

}

//testing
UserApi.getToken("Bezzubik12345", "Winter2005").then((resData) => console.log(resData))