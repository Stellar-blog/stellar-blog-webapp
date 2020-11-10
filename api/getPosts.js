import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'

import { postsByStatus } from '../src/graphql/queries'

function getPosts(){
    const [ lists , setLists ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(async ()=> {
        const res = await API.graphql({
            query: postsByStatus,
            variables: {
                status: "PUBLIC",
                sortDirection: "DESC",
            }
        })
        setLists(res.data.postsByStatus.items)
        setLoading(false)
    }, [])

    return {
        lists,
        loading 
    }
} 

export default getPosts