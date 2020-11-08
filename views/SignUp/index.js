import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { API, Auth, withSSRContext } from 'aws-amplify'

import { createSpace } from '../../src/graphql/mutations'
import NavBar from '../../components/Nav'
import {
    Main,
    Center,
    Form,
    ErrorMessage,
    InfoMessage,
    InfoLink,
} from '../../styles'
import { AWS_AUTH_FORM_TYPE } from '../../constants'
import { profileGenerator } from '../../utils/profileGenerator'

const defaultFormState = {
    'username': '',
    'email': '',
    'password': '',
    'authCode': '',
}

function Signup() {

    const router = useRouter()
    const inputRef = useRef()

    const [formState, setFormState] = useState(defaultFormState)
    const [step, setStep] = useState(AWS_AUTH_FORM_TYPE.SIGNUP)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [resent, setResent] = useState(false)

    useEffect(() => {
        inputRef.current.focus()
    }, [step])

    const handleResend = async () => {
        const { username } = formState
        try {
            await Auth.resendSignUp(username)
            setResent(true)
        } catch(e) {
            console.log("sign up error : ", e)
            setError(e)
        }
        
    }

    const handleSignUp = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const { username, email, password } = formState

        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                }
            })

            setError(null)
            setStep(AWS_AUTH_FORM_TYPE.SIGNUP_CONFIRM)
        } catch (e) {
            console.log("sign up error : ", e)
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }

    const handleConfirmSignUp = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const { username, authCode } = formState

        try {
            //Step2 confirm MFA
            await Auth.confirmSignUp(username, authCode)

            //Step3 Sign in
            const newUser = await Auth.signIn(username, formState.password)

            //Step4 Build user's space
            await API.graphql({
                query: createSpace,
                variables: {
                    input: {
                        id: newUser.attributes.sub,
                        userId: newUser.attributes.sub,
                        defaultProfile: profileGenerator(newUser.attributes.sub),
                        language: "EN",
                    }
                },
                authMode: "AMAZON_COGNITO_USER_POOLS"
            })

            setError(null)
            setFormState(defaultFormState)
            router.push('/dashboard')
        } catch (e) {
            console.log("confirmation error : ", e)
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
                <NavBar authType={AWS_AUTH_FORM_TYPE.SIGNUP} />
                <Center>
                    {
                        step === AWS_AUTH_FORM_TYPE.SIGNUP &&
                        (
                            <Form onSubmit={handleSignUp}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={formState.username}
                                    onChange={handleChange}
                                    ref={inputRef}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
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
                                            : "Sign up"
                                    }
                                </button>
                            </Form>
                        )
                    }
                    {
                        step === AWS_AUTH_FORM_TYPE.SIGNUP_CONFIRM &&
                        (
                            <Form onSubmit={handleConfirmSignUp}>
                                <InfoMessage>
                                    We've sent a 6-digit auth code to your email.
                                </InfoMessage>
                                <input
                                    type="number"
                                    placeholder="Auth Code"
                                    name="authCode"
                                    value={formState.authCode}
                                    onChange={handleChange}
                                    ref={inputRef}
                                />
                                {
                                    error && <ErrorMessage>{error.message}</ErrorMessage>
                                }
                                {
                                    resent
                                    ?
                                    (
                                    <ErrorMessage>
                                        New code has been sent again
                                    </ErrorMessage>
                                    )
                                    :
                                    (
                                    <InfoLink onClick={handleResend}>
                                        resend auth code
                                    </InfoLink>

                                    )
                                }
                                <button type="submit">
                                    {
                                        isLoading
                                            ? "loading..."
                                            : "Confirm"
                                    }
                                </button>
                            </Form>
                        )
                    }
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

export default Signup;