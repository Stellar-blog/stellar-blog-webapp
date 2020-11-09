import { useEffect, useState } from 'react'
import { Storage } from 'aws-amplify'

import ImageLoader from './ImageLoader'
import {
    CardContainer,
} from './styles'

function Card({ data }) {
    if (!data) return null;

    const [imageUrls, setImageUrls] = useState(['/loading.svg'])

    useEffect(() => {
        Promise.all(data.postImages.items.map((image) => Storage.get(image.desktopKey)))
        .then(urls => setImageUrls(urls))
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
            <ImageLoader imageUrls={imageUrls} data={data} />
            <div className="name">
                {
                    data.title
                }
            </div>
            <div className="hashtags">
                {
                    (data.hashtags && Array.isArray(data.hashtags)) &&
                    data.hashtags.map((tag, i) => <div key={i} className="tag" >{`# ${tag}`}</div>)
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