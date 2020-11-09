import { withSSRContext } from 'aws-amplify'

import { listSpaces } from '../../src/graphql/queries'
import getPosts from '../../api/getPosts'

import Header from '../../components/CommonHeader'
import NavBar from '../../components/PrivateNav'
import SpaceMenu from './SpaceMenu'
import MyPosts from './MyPosts'
import {
    DashboardMain,
    FlexBasicContainer
} from '../../styles'

function Space({ space, isOwner, username }) { 
    const { lists, loading } = getPosts(username)

    return (
        <>
            <Header />
            <DashboardMain>
                <NavBar />
                <FlexBasicContainer>
                    <MyPosts lists={lists} loading={loading} isOwner={isOwner} />
                    <SpaceMenu space={space} isOwner={isOwner} />
                </FlexBasicContainer>
            </DashboardMain>
        </>
    )
}

export async function getServerSideProps({ params, req, res }) {
    const { Auth, API } = withSSRContext({ req })

    const username = params.id

    try{
        const user = await Auth.currentAuthenticatedUser()

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

        const userspace = space.data.listSpaces.items[0]
    
        if (userspace.length) {
            throw new Error("No result")
        }

        let isOwner = false
        if (user && user.attributes.sub === userspace.userId) {
            isOwner = true
        }
    
        return {
            props: {
                space: space.data.listSpaces.items[0],
                isOwner,
                username,
            }
        }
    } catch(e) {
        res.writeHead(302, { Location: '/dashboard' })
        res.end()
        return {
            props: {}
        }
    }
}

export default Space