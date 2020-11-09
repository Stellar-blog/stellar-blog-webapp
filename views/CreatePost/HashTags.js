import {useState} from 'react'

import DisplayTags from './DisplayTags'
import {
    HashTagsContainer
} from './styles'


function HashTags({ handleChange }){

    const [ tags , setTags ] = useState([])
    const [ input, setInput ] = useState('')

    const handleInput = e => {
        setInput(e.target.value.trim())
    }

    const handleDelete = deletedTag => {
        const updatedTags = tags.filter(tag => tag !== deletedTag)
        setTags(updatedTags)
        handleChange({
            target: {
                name: "hashtags",
                value: updatedTags,
            }
        })
    }

    const handleAdd = e => {
        if (e.key === "Enter") {
            const updatedTags = tags.concat(input)
            setTags(updatedTags)
            handleChange({
                target: {
                    name: "hashtags",
                    value: updatedTags,
                }
            })
            setInput('')
        }
    }

    return (
        <HashTagsContainer>
            <DisplayTags tags={tags} handleDelete={handleDelete} />
            <input
                type="text"
                placeholder="Add hashtag"
                onKeyPress={handleAdd}
                value={input}
                onChange={handleInput}
            />
        </HashTagsContainer>
    )
}

export default HashTags