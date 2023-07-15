import { useEffect, useState } from 'react'
import { dateTimeConverter } from '../../utils/Prettify'
import UserApi from '../../api/UserApi'
import responseTypeEnum from '../../enums/ResponseTypeEnum'
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
            <div className='comment_info'>
                <div className='commenter_info'>{commenterName}</div>
                <div className='time_info'>{convertedCreatedAt}</div>
            </div>
            <div className='content'>
                {content}
            </div>
        </div>
    )
}

export default Comment