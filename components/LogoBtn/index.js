import Link from 'next/link'

import {
    Logo,
} from './styles'

const LogoBtn = ({ href }) => (
    <Link href={href} passHref>
        <Logo>Stellar</Logo>
    </Link>
)


export default LogoBtn