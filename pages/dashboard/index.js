import { useEffect, useState } from 'react'
import Head from 'next/head'
import { API, withSSRContext } from 'aws-amplify'

import { postsByStatus } from '../../src/graphql/queries'
import NavBar from '../../components/PrivateNav'
import Card from '../../components/Card'
import {
    DashboardMain,
    Center,
} from '../../styles'

function Dashboard() {

    const [list, setList] = useState([]);

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const res = await API.graphql({
            query: postsByStatus,
            variables: {
                status: "PUBLIC",
                sortDirection: "DESC",
            },
        })

        console.log("response : ", res.data.postsByStatus.items)
        setList(res.data.postsByStatus.items)
    }

    return (
        <>
            <Head>
                <title>Stellar blog</title>
            </Head>
            <DashboardMain>
                <NavBar />
                <Center type="dashboard">
                    {
                        list.map((item) => <Card key={item.id} data={item} />)
                    }
                </Center>
            </DashboardMain>
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    const { Auth } = withSSRContext({ req })

    try {
        await Auth.currentAuthenticatedUser()
    } catch (e) {
        res.writeHead(302, { Location: '/' })
        res.end()
    } finally {
        return {
            props: {}
        }
    }
}

export default Dashboard;