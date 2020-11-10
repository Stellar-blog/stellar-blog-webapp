import { API } from 'aws-amplify'

import { deletePost } from '../src/graphql/mutations'

const deletePostById = async (id) => {
    try {
        const res = await API.graphql({
            query: deletePost,
            variables: {
                input: {
                    id,
                }
            },
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        return true
    } catch(e) {
        console.log("post delete error : ", e)
        return false
    }
} 

export default deletePostById