import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Auth, withSSRContext } from 'aws-amplify'

import NavBar from '../../components/Nav'
import {
    Main,
    Center,
    Form,
    ErrorMessage,
} from '../../styles'
import { AWS_AUTH_FORM_TYPE } from '../../constants'

const defaultFormState = {
    'username': '',
    'password': '',
}

function Login() {

    const router = useRouter()
    const inputRef = useRef()

    const [formState, setFormState] = useState(defaultFormState)
    const [step, setStep] = useState(AWS_AUTH_FORM_TYPE.SIGNIN)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [step])

    const handleSignIn = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const { username, password } = formState

        try {
            await Auth.signIn(username, password)
            router.push('/dashboard')
        } catch (e) {
            console.log("sign in error : ", e)
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = e => {
        const { name, value } = e.target

        setFormState(state => ({
            ...state,
            [name]: value
        }))
    }

    return (
        <>
            <Head>
                <title>Stellar blog</title>
            </Head>
            <Main>
                <NavBar authType={AWS_AUTH_FORM_TYPE.SIGNIN} />
                <Center>
                    <Form onSubmit={handleSignIn}>
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={formState.username}
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        {
                            error && <ErrorMessage>{error.message}</ErrorMessage>
                        }
                        <button type="submit">
                            {
                                isLoading
                                    ? "loading..."
                                    : "Log in"
                            }
                        </button>
                    </Form>
                </Center>
            </Main>
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    const { Auth } = withSSRContext({ req })
    try {
        await Auth.currentAuthenticatedUser()
        res.writeHead(302, { Location: '/dashboard' })
        res.end()
    } finally {
        return {
            props: {}
        }
    }
}

export default Login;