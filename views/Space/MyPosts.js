import Card from '../../components/Card'
import NoPosts from './NoPosts'
import {
    MyPostsContainer
} from './styles'

const SpaceMenu = ({ lists, loading, user }) => (
    <MyPostsContainer>
        {
            loading
                ? null
                : lists.length > 0
                    ? lists.map((list) => <Card key={list.id} data={list} user={user}/>)
                    : <NoPosts />
        }
    </MyPostsContainer>
)

export default SpaceMenu