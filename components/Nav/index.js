import LogoBtn from '../LogoBtn'
import AuthBtn from '../AuthBtn'
import {
    Nav,
} from './styles'
import { AWS_AUTH_FORM_TYPE } from '../../constants'

const NavBar = ({ authType }) => (
    <Nav>
        <LogoBtn href="/" />
        <div>
            {
                authType === AWS_AUTH_FORM_TYPE.SIGNIN
                && <AuthBtn href="/signup" text="Sign Up" />
            }
            {
                authType === AWS_AUTH_FORM_TYPE.SIGNUP
                && <AuthBtn href="/login" text="Log in" type="no-box" />
            }
            {
                authType === AWS_AUTH_FORM_TYPE.NOTSIGNEDIN &&
                (
                    <>
                        <AuthBtn href="/login" text="Log in" type="no-box" />
                        <AuthBtn href="/signup" text="Sign Up" />
                    </>
                )
            }
        </div>
    </Nav>
)

export default NavBar