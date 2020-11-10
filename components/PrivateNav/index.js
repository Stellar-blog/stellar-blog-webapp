import checkUser from '../../api/checkUser'
import useResize from '../../hooks/useResize'

import Logo from '../LogoBtn'
import SearchBar from '../SearchBar'
import NewPostBtn from './NewPostBtn'
import UserBtn from './UserBtn'
import BarBtn from './BarBtn'
import {
    Nav,
    MenuContainer
} from './styles'

const PrivateNavBar = () => {
    const user = checkUser()
    const isMobile = useResize()

    return (
        <Nav>
            <div className="nav-subcontainer">
                <Logo href="/dashboard" />
                <SearchBar />
                <MenuContainer isMobile={isMobile}>
                    {
                        !isMobile
                        ?
                        (
                            <>
                                <NewPostBtn />
                                <UserBtn user={user}/>
                            </>
                        )
                        : <BarBtn user={user}/>
                    }

                </MenuContainer>
            </div>
        </Nav>
    )
}

export default PrivateNavBar