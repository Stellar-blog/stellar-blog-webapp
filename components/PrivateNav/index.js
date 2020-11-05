import checkUser from '../../api/checkUser'
import NewPostBtn from '../NewPostBtn'
import UserBtn from '../UserBtn'
import Logo from '../LogoBtn'
import {
    Nav,
    MenuContainer
} from './styles'

const PrivateNavBar = () => {
    const user = checkUser()

    return (
        <Nav>
            <div className="nav-subcontainer">
                <Logo href="/dashboard" />
                <MenuContainer>
                    <NewPostBtn />
                    <UserBtn user={user}/>
                </MenuContainer>
            </div>
        </Nav>
    )
}

export default PrivateNavBar