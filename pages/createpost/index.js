import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { withSSRContext, API, Storage } from 'aws-amplify'
import { v4 as uuidv4 } from 'uuid';

import { createPost, createPostImage } from '../../src/graphql/mutations'
import NavBar from '../../components/PrivateNav'
import {
    Center,
    Form,
    ImageUploader,
    DashboardMain,
    ErrorMessage,
} from '../../pages/styles'

const defaultFormState = {
    title: '',
    content: '',
}

const defaultImageState = {
    url: '',
    image: '',
    value: '',
    file: undefined,
    ext: '',
}

function CreatePost({ userId }) {

    const router = useRouter()
    const inputRef = useRef()

    const [formState, setFormState] = useState(defaultFormState)
    const [imageState, setImageState] = useState(defaultImageState)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!formState.title || !formState.content) {
            return setError({
                message: "Input cannot be empty"
            })
        }

        setIsLoading(true)

        const imageRandomName = `${uuidv4()}.${imageState.ext}`

        try {
            const storageRes = await Storage.put(imageRandomName, imageState.file)
            const getImageHeight = document.getElementById("displayedImage").height;

            const createPostRes = await API.graphql({
                query: createPost,
                variables: {
                    input: {
                        userId,
                        userSpaceId: userId,
                        status: "PUBLIC",
                        ...formState,
                    }
                },
                authMode: "AMAZON_COGNITO_USER_POOLS"
            })

            await API.graphql({
                query: createPostImage,
                variables: {
                    input: {
                        userId,
                        postId: createPostRes.data.createPost.id,
                        size: `${getImageHeight}`,
                        desktopKey: storageRes.key
                    }
                },
                authMode: "AMAZON_COGNITO_USER_POOLS"
            })

            router.push('/dashboard')

        } catch (e) {
            console.log("upload error : ", e)
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }

    const handleImage = e => {
        const file = e.target.files[0]
        setImageState(state => ({
            ...state,
            url: URL.createObjectURL(file),
            image: file.name,
            file,
            ext: file.type.split("/")[1]
        }))
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormState(state => ({
            ...state,
            [name]: value
        }))
    }

    const DeleteImage = e => setImageState(defaultImageState)

    return (
        <>
            <Head>
                <title>Stellar blog</title>
            </Head>
            <DashboardMain>
                <NavBar />
                <Center type="post">
                    <Form onSubmit={handleSubmit} type="post">
                        {
                            imageState.url &&
                            (
                                <div className="imageContainer">
                                    <img src={imageState.url} alt="image" id="displayedImage" />
                                    <div className="imageOverlay">
                                        <div
                                            className="imageDeleteButton"
                                            onClick={DeleteImage}
                                        >{`Delete ${imageState.image}`}</div>
                                    </div>
                                </div>
                            )
                        }
                        <input
                            type="text"
                            placeholder="Your post title"
                            name="title"
                            onChange={handleChange}
                            value={formState.title}
                            ref={inputRef}
                        />
                        <ImageUploader
                            id="file"
                            type="file"
                            accept="image/*"
                            name="image"
                            onChange={handleImage}
                            value={imageState.value}
                        />
                        <label htmlFor="file">Upload an image</label>
                        <textarea
                            placeholder="Your awesome content"
                            name="content"
                            onChange={handleChange}
                            value={formState.value}
                        />
                        {
                            error && <ErrorMessage>{error.message}</ErrorMessage>
                        }
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

export async function getServerSideProps({ req, res }) {
    const { Auth } = withSSRContext({ req })

    try {
        const user = await Auth.currentAuthenticatedUser()

        return {
            props: {
                userId: user.attributes.sub
            }
        }
    } catch (e) {
        res.writeHead(302, { Location: '/' })
        res.end()
        return {
            props: {}
        }
    }
}

export default CreatePost;