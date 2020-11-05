import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'

import { postsByStatus } from '../src/graphql/queries'

function getPosts(username){

    const [ list , setList ] = useState([])

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
        const res = await API.graphql({
            query: postsByStatus,
            variables: variablesGenerator(username)
        })
        setList(res.data.postsByStatus.items)
    }, [])

    return list
} 

export default getPosts