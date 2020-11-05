import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { withSSRContext } from 'aws-amplify'

import useForm from '../../hooks/useForm'
import formValidator from '../../utils/formValidator'
import Header from '../../components/CommonHeader'
import NavBar from '../../components/PrivateNav'
import ImageUploader from '../../components/ImageUploader'
import ErrorMessage from '../../components/ErrorMessage'
import {
    Center,
    Form,
    DashboardMain,
} from '../../styles'

const defaultForm = {
    title: '',
    files: [],
}

function CreatePost({ userId }) {
    const router = useRouter()
    const inputRef = useRef()

    const {
        formState,
        isLoading,
        error,
        handleChange,
        handleSubmit,
    } = useForm(
        defaultForm,
        formValidator,
        userId,
        () => router.push('/dashboard')
    )

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <>
            <Header />
            <DashboardMain>
                <NavBar />
                <Center type="post">
                    <Form onSubmit={handleSubmit} type="post">
                        <ImageUploader
                            handleChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Your post title"
                            name="title"
                            onChange={handleChange}
                            value={formState.title}
                            ref={inputRef}
                        />
                        <ErrorMessage errors={error} />
                        <button type="submit">
                            {
                                isLoading
                                    ? "loading..."
                                    : "Submit"
                            }
                        </button>
                    </Form>
                </Center>
            </DashboardMain>
        </>
    )
}

// export async function getServerSideProps({ req, res }) {
//     const { Auth } = withSSRContext({ req })
//     try {
//         const user = await Auth.currentAuthenticatedUser()
//         return {
//             props: {
//                 userId: user.attributes.sub
//             }
//         }
//     } catch (e) {
//         res.writeHead(302, { Location: '/' })
//         res.end()
//         return {
//             props: {}
//         }
//     }
// }

export default CreatePost;