import { API } from 'aws-amplify'

import { createPost } from '../src/graphql/mutations'

const createPostAPI = (formState, userId) => {
    return API.graphql({
        query: createPost,
        variables: {
            input: {
                userId,
                userSpaceId: userId,
                title: formState.title,
                hashtags: formState.hashtags,
                status: "PUBLIC",
            }
        },
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
}

export default createPostAPI