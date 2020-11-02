import NewPostBtn from '../NewPostBtn'
import UserBtn from '../UserBtn'
import Logo from '../LogoBtn'
import {
    Nav,
    MenuContainer
} from './styles'

function PrivateNavBar() {
    return (
        <Nav>
            <Logo href="/dashboard" />
            <MenuContainer>
                <NewPostBtn />
                <UserBtn />
            </MenuContainer>
        </Nav>
    )
}

export default PrivateNavBar