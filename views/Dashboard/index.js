import { withSSRContext } from 'aws-amplify'

import getPosts, { lists } from '../../api/getPosts'
import CommonHeader from '../../components/CommonHeader'
import NavBar from '../../components/PrivateNav'
import Card from '../../components/Card'
import {
    DashboardMain,
    Center,
} from '../../styles'

function Dashboard() {

    const { lists } = getPosts()

    return (
        <>
            <CommonHeader />
            <DashboardMain>
                <NavBar />
                <Center type="dashboard">
                    {
                        lists.map((item) => <Card key={item.id} data={item} />)
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