import {
    SpaceMenuContainer
} from './styles'

const SpaceMenu = ({ space, isOwner }) => (
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
        {
            !isOwner &&
            (
                <div className="menu">
                    Follow
                </div>
            )
        }
        {
            isOwner &&
            (
                <div className="menu">
                    Settings
                </div>
            )
        }
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