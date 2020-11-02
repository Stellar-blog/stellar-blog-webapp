import { useEffect, useState } from 'react';
import { API } from 'aws-amplify'

import { createSpace } from '../src/graphql/mutations'
import { profileGenerator } from './profileGenerator'

function spaceGenerator(userSub) {

    const [res, setRes] = useState(null)

    useEffect(async () => {
        const space = await API.graphql({
            query: createSpace,
            variables: {
                input: {
                    id: userSub,
                    userId: userSub,
                    defaultProfile: profileGenerator(userSub),
                    language: "EN",
                }
            },
        })

        console.log("space : ", space)
        setRes(space)
    }, [])

    return res
}

export default spaceGenerator