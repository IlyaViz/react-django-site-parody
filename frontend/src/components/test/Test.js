import { useEffect } from "react"
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import UserApi from "../../api/UserApi"

const Test = () => {

    useEffect(() => {
        UserApi.validateLocalStorageToken().then((res) => {
            if (res != responseTypeEnum.error) {
                console.log(true)
            }
        })
    }, [])

    return (
        1
    )
}

export default Test