import Link from 'next/link'

import {
    Button,
} from '../../pages/styles'

function AuthBtn({ href, type, text }) {
    return (
        <Link href={href} passHref>
            <Button type={type}>
                {text}
            </Button>
        </Link>
    )
}

export default AuthBtn