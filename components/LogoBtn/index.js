import Link from 'next/link'

import useResize from '../../hooks/useResize'
import {
    Logo,
} from './styles'

const LogoBtn = ({ href }) => {

    const isMobile = useResize()

    return(
        <Link href={href} passHref>
            <Logo isMobile={isMobile} >
                {
                    isMobile
                    ? "S"
                    : "Stellar"
                }
            </Logo>
        </Link>
    )
}



export default LogoBtn