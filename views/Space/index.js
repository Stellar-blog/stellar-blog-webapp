import { useEffect, useState } from 'react'
import { withRouter } from 'next/router'

import checkUser from '../../api/checkUser'
import getPosts from '../../api/getPostsByUsername'
import getSpace from '../../api/getSpace'
import Header from '../../components/CommonHeader'
import NavBar from '../../components/PrivateNav'
import SpaceMenu from './SpaceMenu'
import MyPosts from './MyPosts'
import {
    DashboardMain,
    FlexBasicContainer
} from '../../styles'

function Space({ router }) { 
    const { user } = checkUser()
    const { lists, loading  } = getPosts(router.query.id)
    const { space, error } = getSpace(router.query.id)

    useEffect(()=> {
        if (error) router.push('/dashboard')
    }, [error])

    return (
        <>
            <Header />
            <DashboardMain>
                <NavBar />
                <FlexBasicContainer>
                    <MyPosts lists={lists} loading={loading} user={user}/>
                    {
                        space &&
                        <SpaceMenu space={space} />
                    }
                </FlexBasicContainer>
            </DashboardMain>
        </>
    )
}

export default withRouter(Space)