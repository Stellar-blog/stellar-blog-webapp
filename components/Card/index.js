import { useEffect, useState } from 'react'
import { Storage } from 'aws-amplify'

import ImageLoader from './ImageLoader'
import DropDownMenu from './DropDownMenu'
import {
    CardContainer,
} from './styles'

function Card({ data, user }) {
    if (!data || !user) return null;

    const [imageUrls, setImageUrls] = useState([])
    const [isOnwer, setIsOwner] = useState(false)
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        if (user.username && data.username === user.username) {
            setIsOwner(true)
        }
    }, [data.username, user.username])

    useEffect(() => {
        setImageUrls(data.postImages.items.map((image) => {
            return `${process.env.NEXT_PUBLIC_S3_BUCKET}${image.desktopKey}`
        }))
    }, [data])

    return (
        <>
            {
                deleted
                    ? null
                    :
                    (
                        <CardContainer>
                            <div className="first-row">
                                <div className="user-info">
                                    {
                                        isOnwer
                                            ? <div> {`${data.username} (me)`} </div>
                                            :
                                            (<>
                                                <div> {data.username} </div>
                                                <div className="followButton">
                                                    Follow
                                </div>
                                            </>)
                                    }
                                </div>
                                {
                                    isOnwer && <DropDownMenu data={data} setDeleted={setDeleted} />
                                }
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
        </>
    )
}

export default Card