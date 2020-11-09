import Account from './Account'
import {
    MySettingsContainer
} from './styles'

const MySettings = ({user}) => {
    return(
        <MySettingsContainer>
            <Account user={user} />
        </MySettingsContainer>
    )
}

export default MySettings