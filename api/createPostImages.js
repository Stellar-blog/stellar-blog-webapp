import { API, Storage } from 'aws-amplify'
import { v4 as uuidv4 } from 'uuid';

import { createPostImage } from '../src/graphql/mutations'

const createPostImages = (formState, createPostRes, userId) => {
    const { files } = formState
    const postId = createPostRes.data.createPost.id

    return Promise.all(
        files.map(async (file) => {
            const uniqueName = `${uuidv4()}.${file.type.split("/")[1]}`
            const storageRes = await Storage.put(uniqueName, file, {
                acl: 'public-read',
                cacheControl: 'max-age=31536000',
            })

            const getImageHeight = document.getElementById(file.name).height;
            await API.graphql({
                query: createPostImage,
                variables: {
                    input: {
                        userId,
                        postId,
                        size: `${getImageHeight}`,
                        desktopKey: storageRes.key
                    }
                },
                authMode: "AMAZON_COGNITO_USER_POOLS"
            })
        })
    )
}

export default createPostImages