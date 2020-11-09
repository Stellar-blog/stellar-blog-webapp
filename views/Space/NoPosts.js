import {
    NoPostsContainer
} from './styles'

const NoPosts = () => (
    <NoPostsContainer>
        <img 
                src="/rocket.svg"
                alt="No posts"
            />
        <h2>
            No posts available
        </h2>
    </NoPostsContainer>
)

export default NoPosts