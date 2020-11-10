import { useState } from 'react'

import createPost from '../api/createPost'
import createPostImageRes from '../api/createPostImages'

const useForm = (defaultForm, validator, userId, callback) => {
    const [formState, setFormState] = useState(defaultForm)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            validator(formState)
            const createPostRes = await createPost(formState, userId)
            await createPostImageRes(formState, createPostRes, userId)
            callback()
        } catch (e) {
            console.log("upload error : ", e)
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

    return {
        formState,
        isLoading,
        error,
        handleChange,
        handleSubmit,
    }
}

export default useForm