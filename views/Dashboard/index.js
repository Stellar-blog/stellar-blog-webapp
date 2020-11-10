import getPosts from '../../api/getPosts'
import checkUser from '../../api/checkUser'

import CommonHeader from '../../components/CommonHeader'
import NavBar from '../../components/PrivateNav'
import Card from '../../components/Card'
import {
    DashboardMain,
    Center,
} from '../../styles'

function Dashboard() {

    const { lists } = getPosts()
    const user = checkUser()

    return (
        <>
            <CommonHeader />
            <DashboardMain>
                <NavBar />
                <Center type="dashboard">
                    {
                        lists.map((item) => <Card key={item.id} data={item} user={user} />)
                    }
                </Center>
            </DashboardMain>
        </>
    )
}

export default Dashboard;