import {
    TermContainer
} from './styles'

function Term({ term }) {
    return (
        <TermContainer>
            <span>Search term : </span>
            <span className="term">{term}</span>
        </TermContainer>
    )
}

export default Term