import {
    DisplayTagsContainer,
    TagContainer
} from './styles'

function Tag({ tag, handleDelete }) {
    return (
        <TagContainer>
            {
                tag
            }
            <span 
                className="delete-button"
                onClick={handleDelete}
            >
                X
            </span>
        </TagContainer>
    )
}

function DisplayTags({ tags, handleDelete }){
    if (!Array.isArray(tags) || tags.length === 0) return null

    return (
        <DisplayTagsContainer>
            {
                tags.map((tag,i) => <Tag key={i} tag={tag} handleDelete={()=>handleDelete(tag)} />)
            }
        </DisplayTagsContainer>
    )
}

export default DisplayTags