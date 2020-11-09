import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'

import { postsByStatus } from '../src/graphql/queries'

function getPosts(username){
    const [ lists , setLists ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const variablesGenerator = (username) => {
        const defaultVariables = {
            status: "PUBLIC",
            sortDirection: "DESC",
        }
        if (username) {
            return Object.assign(defaultVariables, {
                filter: {
                    username: {
                        eq: username
                    }
                }
            })
        }
        return defaultVariables
    }

    useEffect(async ()=> {
        if (username) {
            const res = await API.graphql({
                query: postsByStatus,
                variables: variablesGenerator(username)
            })
            setLists(res.data.postsByStatus.items)
            setLoading(false)
        }
    }, [username])

    return {
        lists,
        loading 
    }
} 

export default getPosts