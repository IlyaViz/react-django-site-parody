import { useEffect } from "react"
import responseTypeEnum from '../../enums/ResponseTypeEnum'
import UserApi from "../../api/UserApi"

const Test = () => {

    useEffect(() => {
        UserApi.createUser("Bezzubik1", "Winter2005").then((res) => {
            console.log(res)
        })
    }, [])

    return (
        1
    )
}

export default Test