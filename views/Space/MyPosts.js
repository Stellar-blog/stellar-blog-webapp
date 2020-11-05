import Card from '../../components/Card'
import NoPosts from './NoPosts'
import {
    MyPostsContainer
} from './styles'

const SpaceMenu = ({ lists, isOwner, loading }) => (
    <MyPostsContainer>
        {
            loading
                ? null
                : lists.length > 0
                    ? lists.map((list) => <Card key={list.id} data={list} isOwner={isOwner} />)
                    : <NoPosts />
        }
    </MyPostsContainer>
)

export default SpaceMenu