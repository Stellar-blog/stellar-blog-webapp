import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'

import { searchPosts } from '../src/graphql/queries'

function searchPostsByTerm(hashtags){
    const [ lists , setLists ] = useState([])
    const [ isLoading, setisLoading ] = useState(true)

    useEffect(async ()=> {
        const filter = {
            hashtags: {
                match: {
                    hashtags: hashtags,
                }
            }
        }

        const res = await API.graphql({
            query: searchPosts,
            variables: {
                filter,
            }
        })
        setLists(res.data.searchPosts.items)
        setisLoading(false)
    }, [hashtags])

    return {
        lists,
        isLoading 
    }
} 

export default searchPostsByTerm