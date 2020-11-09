import checkUser from '../../api/checkUser'
import Header from '../../components/CommonHeader'
import NavBar from '../../components/PrivateNav'
import MySettings from './MySettings'
import SettingsMenu from './SettingsMenu'
import {
    DashboardMain,
    FlexBasicContainer
} from '../../styles'

function Settings() { 
    const user = checkUser()

    return (
        <>
            <Header />
            <DashboardMain>
                <NavBar />
                <FlexBasicContainer>
                    <MySettings user={user} />
                    <SettingsMenu />
                </FlexBasicContainer>
            </DashboardMain>
        </>
    )
}

export default Settings