import axios from 'axios'
import responseTypeEnum from '../enums/responseTypeEnum'
import * as constants from './Constants'

export default class CommentApi {
    
    static getComments = (type, commentedObjectId, page) => {
        const currentPage = page ? page : 1
        const requestedUrl = `${constants.backendUrl}get_comments/${type}/${commentedObjectId}?page=${currentPage}`
        const responseData = axios.get(requestedUrl, constants.config)
            .then((response) => { 
                return response.data
            })
            .catch((error) => {
                return responseTypeEnum.error
            })
        return responseData
    }

    static addComment = (type, commentedObjectId, content) => {
        const requestedUrl = constants.backendUrl + "add_comment"
        const data = {
            "type":type,
            "commented_object_id":commentedObjectId,
            "content":content
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
}