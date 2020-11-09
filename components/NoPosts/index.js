import {
    NoPostsContainer
} from './styles'

const NoPosts = ({ message }) => (
    <NoPostsContainer className="no-posts">
        <img 
                src="/rocket.svg"
                alt="No posts"
            />
        <h2>
            {
                message
                ? message
                : "No posts available"
            }
        </h2>
    </NoPostsContainer>
)

export default NoPosts