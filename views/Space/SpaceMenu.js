import {
    SpaceMenuContainer
} from './styles'

const SpaceMenu = ({ space }) => (
    <SpaceMenuContainer>
        <div className="profileContainer">
            <div>
                <img
                    src={space.defaultProfile}
                    alt={space.username}
                />
            </div>
            <div>
                {
                    space.username
                }
            </div>
        </div>
        <div className="menu">
            Follow
        </div>
        <div className="menu not-available">
            Message
            </div>
        <div className="menu">
            {`Followers : ${space.follower.items.length}`}
        </div>
        <div className="menu selected lastmenu">
            {`Posts : ${space.posts.items.length}`}
        </div>
    </SpaceMenuContainer>
)

export default SpaceMenu