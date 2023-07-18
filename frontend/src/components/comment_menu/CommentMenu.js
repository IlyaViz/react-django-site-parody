import { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { jsonObjectArrayPrettification } from '../../utils/Prettify'
import UserApi from '../../api/UserApi'
import Comment from '../comment/Comment'
import CommentApi from '../../api/CommentApi'
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import './CommentMenu.css'

const CommentMenu = (props) => {
    const { type, commentedObjectId } = props
    const [comments, setComments] = useState([])
    const [formSubmitCount, setFormSubmitCount] = useState(0)
    const [inputIsEmpty, setInputIsEmpty] = useState(true)
    const newCommentInputRef = useRef()
    const navigate = useNavigate()

    const onFormSubmit = (event) => {
        event.preventDefault()
        UserApi.validateLocalStorageToken().then((res) => {
            if (res == responseTypeEnum.error) {
                navigate("/login")
            }
        })
        CommentApi.addComment(type, commentedObjectId, newCommentInputRef.current.value).then((res) => {
            if (res != responseTypeEnum.error) {
                newCommentInputRef.current.value = ""
                setInputIsEmpty(true)
                setFormSubmitCount(formSubmitCount + 1)
            }
        })
    }

    const onInputChange = (event) => {
        if (event.target.value.length > 0) {
            setInputIsEmpty(false)
        } else {
            setInputIsEmpty(true)
        }
    }

    useEffect(() => {
        CommentApi.getComments(type, commentedObjectId).then((res) => {
            if (res != responseTypeEnum.error) {
                const prettifiedArray = jsonObjectArrayPrettification(res)
                setComments(prettifiedArray)
            }
        })
    }, [formSubmitCount])

    return (
        <div className='comment_menu'>
            <form className='add_comment_form' onSubmit={(event) => onFormSubmit(event)}>
                <textarea placeholder='Оставьте свое мнение тут' ref={newCommentInputRef} onChange={(event) => onInputChange(event)} />
                <button disabled={inputIsEmpty}>Отправить</button>
            </form>

            <div className='comments'>
                {comments.map((comment, index) => {
                    return <Comment
                        key={index}
                        commentObject={comment}
                    />
                })}
            </div>

        </div >
    )

}

export default CommentMenu