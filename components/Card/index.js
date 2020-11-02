import { useEffect, useState } from 'react'
import { Storage } from 'aws-amplify'

import {
    CardContainer,
    ImageLoader
} from '../../styles'

function Card({ data }) {

    const [imageUrl, setImageUrl] = useState('/loading.svg')

    useEffect(async () => {
        //Currently support only 1 phone per post
        //Will work on to support multiple photos
        const url = await Storage.get(data.postImages.items[0].desktopKey)
        setImageUrl(url)
    }, [])

    return (
        <CardContainer>
            <div className="username">
                {
                    data.username
                }
                <div className="followButton">
                    Follow
                </div>
            </div>
            <ImageLoader
                src={imageUrl}
                alt={data.title}
                height={data.postImages.items[0].size}
            />
            <div className="name">
                {
                    data.title
                }
            </div>
            <div className="content">
                {
                    data.content
                }
            </div>
            <div className="buttonbox">
                <div className="like"></div>
                <div className="comment"></div>
            </div>
        </CardContainer>
    )
}

export default Card