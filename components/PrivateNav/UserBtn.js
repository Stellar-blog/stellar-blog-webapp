import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'

import {
    DropDownContainer,
    ImageContainer,
    DropDownMenus,
} from './styles'

const UserBtn = ({ user }) => { 

    const router = useRouter()
    const [show, setShow] = useState(false)

    useEffect(() => {
        return closeDropDown
    }, [])

    const displayDropDown = () => {
        setShow(true)
        if (!show) document.body.addEventListener('click', toggleDropDown)
    }

    const toggleDropDown = (e) => {
        if (!e.target.classList.contains("dropdownmenu")) closeDropDown()
    }

    const closeDropDown = () => {
        setShow(false)
        document.body.removeEventListener('click', toggleDropDown)
    }

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
                src="/user.svg"
                alt="user"
                onClick={displayDropDown}
                className="dropdownmenu"
            />
            <DropDownMenus className={show ? "show" : "no-show"}>
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

export default UserBtn