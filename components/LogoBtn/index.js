import Link from 'next/link'

import {
    Logo,
} from './styles'

function LogoBtn({ href }) {
    return (
        <Link href={href} passHref>
            <Logo>Stellar</Logo>
        </Link>
    )
}

export default LogoBtn