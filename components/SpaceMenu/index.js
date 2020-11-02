
function SpaceMenu({ space }) {
    return (
        <section>
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
            <div>
                Posts
            </div>
            <div>
                Followers
            </div>
        </section>
    )
}

export default SpaceMenu