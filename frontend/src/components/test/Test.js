import { useEffect } from "react"
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import UserApi from "../../api/UserApi"

const Test = () => {

    useEffect(() => {
        UserApi.getUserInfoByToken("8e16d098d90ec0c1041115ecba1095b8c0628115").then((res) => {
            console.log(res)
        })
    }, [])

    return (
        1
    )
}

export default Test