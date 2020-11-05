import {
    AccountContainer
} from './styles'

const Account = ({user}) => {
    if (!user) return null

    return (
    <AccountContainer>
        <div className="sub-container">
            <div className = "title">
                <h2>Account</h2>
            </div>
            <div className = "content">
                <div className = "name">
                    Username
                </div>
                <div className = "value">
                    <div>
                        {user.username}
                    </div>
                </div>
            </div>
            <div className = "content">
                <div className = "name">
                    Email
                </div>
                <div className = "value">
                    <div>
                        {user.attributes.email}
                    </div>
                </div>
            </div>
            <div className = "content">
                <div className = "name">
                    Password
                </div>
                <div className = "value">
                    <div>
                        ********
                    </div>
                    <div className="button">
                        Edit
                    </div>
                </div>
            </div>
            <div className = "content delete-account">
                <p>Delete account</p>
            </div>
        </div>
    </AccountContainer>
    )
}
export default Account