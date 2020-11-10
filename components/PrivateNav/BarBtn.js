import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'

import {
    DropDownContainer,
    ImageContainer,
    DropDownMenus,
} from './styles'

const BarBtn = ({ user }) => { 

    const router = useRouter()
    const [show, setShow] = useState(false)

    useEffect(() => {
        return closeDropDown
    }, [])

    const displaySideMenu = () => setShow(!show)

    const closeDropDown = () => setShow(false)

    const handleSignOut = async () => {
        try {
            await Auth.signOut()
        } catch (e) {
            console.log("Sign out error : ", e)
        } finally {
            router.push('/')
        }
    }

    return (
        <DropDownContainer>
            <ImageContainer
                src={!show ? "/bar-white.svg" : "/bar-cancel.svg"}
                alt="bar"
                onClick={displaySideMenu}
                className="dropdownmenu"
            />
            <DropDownMenus className={show ? "show" : "no-show"}>
                <Link href="/createpost" passHref>
                    <a className="dropdownmenu">
                        <img
                            src="/pen.svg"
                            alt="create post"
                        />
                        Create Post
                        </a>
                </Link>
                <Link href={user ? `/space/${user.username}` : "/dashboard"} passHref>
                    <a className="dropdownmenu">
                        <img
                            src="/space.svg"
                            alt="My Space"
                        />
                        My Space</a>
                </Link>
                <Link href="/settings" passHref>
                    <a className="dropdownmenu">
                        <img
                            src="/settings.svg"
                            alt="Settings"
                        />
                        Settings
                        </a>
                </Link>

                <div onClick={handleSignOut} className="signout-button">
                    <a className="dropdownmenu">Sign out</a>
                </div>
            </DropDownMenus>
        </DropDownContainer>
    )
}

export default BarBtn