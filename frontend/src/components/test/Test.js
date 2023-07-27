import { useEffect } from "react"
import AnimeDistributionSubscription from "../../api/AnimeDistributionSubscriptionApi"
import responseTypeEnum from "../../enums/ResponseTypeEnum"

const Test = () => {
    useEffect(() => {
        AnimeDistributionSubscription.unsubscribeAnimeDistribution(7).then((res) => {
            if (res != responseTypeEnum.error) {
                console.log(1)
            }
        })
    })

    return (
    1
    )
}

export default Test