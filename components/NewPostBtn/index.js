import Link from 'next/link'

import {
    ImageContainer
} from './styles'

function NewPostBtn() {
    return (
        <Link href="/createpost" passHref>
            <ImageContainer
                src="/pen.svg"
                alt="create post"
            />
        </Link>
    )
}

export default NewPostBtn