import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { API } from 'aws-amplify'

import useDebounce from '../../hooks/useDebounce'
import Suggestion from './Suggestion'
import {
    SearchBarContainer
} from './styles'

const SearchBar = () => {

    const router = useRouter()

    const [ input, setInput ] = useState('')
    const [ suggestions, setSuggestions ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false) 
    const [ error, setError ] = useState(null)
    const [show, setShow] = useState(false)
    const debouncedTerm = useDebounce(input, 500);

    useEffect(() => {
        return closeDropDown
    }, [])

    useEffect(()=> {
        if(debouncedTerm) {
            fireSearch(debouncedTerm);
        }
    }, [debouncedTerm])

    const fireAdd = async (term) => {
        const data = {
            body : {
                term,
            }
        }
        await API.post('stellardictionaryfunc', '/dict/addDictionary', data)
    }

    const fireSearch = async (term) => {
        setIsLoading(true)

        if (term === "") {
            setSuggestions([])
            setIsLoading(false)
            return
        }

        const data = {
            body : {
                term: term.toLowerCase(),
            }
        }

        const {result} =  await API.post('stellardictionaryfunc', '/dict/search', data)
        setSuggestions(result.slice(0,5))
        setIsLoading(false)
        displayDropDown()
    }
    
    const handleChange = e => setInput(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/search/${input}`)
    }

    const handleClick = input => {
        router.push(`/search/${input}`)
    }

    const displayDropDown = () => {
        setShow(true)
        if (!show) document.body.addEventListener('click', toggleDropDown)
    }

    const toggleDropDown = (e) => {
        if (!e.target.classList.contains("suggestion-item")) closeDropDown()
    }

    const closeDropDown = () => {
        setShow(false)
        document.body.removeEventListener('click', toggleDropDown)
    }

    return (
        <SearchBarContainer onSubmit={handleSubmit}>
            <div className="input-container">
                <input 
                    type="search"
                    name="search"
                    id="searchbar-searchinput"
                    placeholder="Search by hashtag"
                    value={input}
                    onChange={handleChange}
                />
                {
                    isLoading &&
                    <img 
                        src="/loading.svg"
                        alt="loading"
                        width="35px"
                        height="35px"
                    />
                }
            </div>
            {
                show &&
                <Suggestion 
                    input={input}
                    suggestions={suggestions} 
                    handleClick={handleClick} 
                />
            }
        </SearchBarContainer>
    )
}

export default SearchBar