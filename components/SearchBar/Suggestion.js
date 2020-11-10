import {
    SuggestionContainer,
    Item,
} from './styles'

const Suggestion = ({ suggestions, handleClick, input='' }) => {

    if (!Array.isArray(suggestions) || suggestions.length === 0) return null

    return (
        <SuggestionContainer>
            {
                suggestions.map((item,i) => {
                    return <Item 
                        key={i} 
                        className="suggestion-item"
                        onClick={()=>handleClick(item)}
                    >
                    <span>#
                        <span className="bold"> {input}</span>
                        <span>{item.substring(input.length)}</span>
                    </span>
                    </Item>
                })
            }
        </SuggestionContainer>
    )
}

export default Suggestion