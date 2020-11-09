import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'

import { listSpaces } from '../src/graphql/queries'

function getSpace(username){

    const [ space , setSpace ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    const getSpaceByUsernmae = async () => {
        try {
            const space = await API.graphql({
                query: listSpaces,
                variables: {
                    filter: {
                        username: {
                            eq: username
                        }
                    },
                }
            })
            const userSpace = space.data.listSpaces.items
            if (userSpace.length === 0) {
                throw new Error("User not found")
            }
            setSpace(userSpace[0])
            setLoading(false)
        }catch(e) {
            console.log("space error : ", e)
            setError(e)
        }
    }

    useEffect(()=> {
        if (username) {
            getSpaceByUsernmae()
        }
    }, [username])

    return {
        space,
        loading,
        error,
    }
} 

export default getSpace
