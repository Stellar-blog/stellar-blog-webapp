import {
    SettingsMenuContainer
} from './styles'

const SettingsMenu = () => (
    <SettingsMenuContainer>
        <div className="menu selected">
            Account
            </div>
        <div className="menu not-available">
            Preference
            </div>
        <div className="menu not-available lastmenu">
            Privacy
            </div>
    </SettingsMenuContainer>
)

export default SettingsMenu