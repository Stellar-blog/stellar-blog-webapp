import { useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

import checkUser from '../../api/checkUser'
import useForm from '../../hooks/useForm'
import formValidator from './formValidator'
import Header from '../../components/CommonHeader'
import NavBar from '../../components/PrivateNav'
import ImageUploader from '../../components/ImageUploader'
import ErrorMessage from '../../components/ErrorMessage'
import HashTags from './HashTags'
import {
    Center,
    DashboardMain,
} from '../../styles'
import {
    Form
} from './styles'

const defaultForm = {
    title: '',
    hashtags: [],
    files: [],
}

function CreatePost() {

    const user = checkUser()
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
        user.attributes.sub,
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
                    <Form >
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
                        <HashTags 
                            handleChange={handleChange}
                        />
                        <ErrorMessage errors={error} />
                        <button onClick={handleSubmit}>
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

export default CreatePost;