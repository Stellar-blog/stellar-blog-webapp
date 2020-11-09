import Link from 'next/link'

import {
    Button,
} from './styles'

const AuthBtn = ({ href, type, text }) => (
    <Link href={href} passHref>
        <Button type={type}>
            {text}
        </Button>
    </Link>
)


export default AuthBtn