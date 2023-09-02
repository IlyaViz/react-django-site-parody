import { useEffect, useState } from 'react'
import { dateTimeConverter } from '../../utils/prettify'
import UserApi from '../../api/UserApi'
import responseTypeEnum from '../../enums/responseTypeEnum'
import './Comment.css'

const Comment = (props) => {
    const { commenter, type, commentedObjectId, content, createdAt, updatedAt } = props.commentObject
    const [commenterName, setCommenterName] = useState("")

    const convertedCreatedAt = dateTimeConverter(createdAt)

    useEffect(() => {
        UserApi.getPublicUserInfoById(commenter).then((res) => {
            if (res != responseTypeEnum.error) {
                setCommenterName(res.username)
            }
        })
    }, [])

    return (
        <div className='comment'>
            <div className='comment__info'>
                <div className='comment__commenter-info'>{commenterName}</div>
                <div className='comment__time-info'>{convertedCreatedAt}</div>
            </div>
            <div className='comment__content'>
                {content}
            </div>
        </div>
    )
}

export default Comment