import { useState, useEffect } from 'react'

import deletePost from '../../api/deletePost'
import {
    DropDownContainer,
    DropDownMenus
} from './styles'

const DropDownMenu = ({ data , setDeleted }) => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        return closeDropDown
    }, [])

    const displayDropDown = () => setShow(!show)

    const closeDropDown = () => setShow(false)

    const handleDeletePost = () => {
        const response = deletePost(data.id)
        if (response) {
            setDeleted(true)
        }
    }

    return (
        <DropDownContainer>
            <img 
                src="/card-menu.svg"
                alt="card menu"
                width="25px"
                height="25px"
                onClick={displayDropDown}
            />
            <DropDownMenus className={show ? "show" : "no-show"}>
                <a className="dropdownmenu not-available">
                    <img
                        src="/pen-blk.svg"
                        alt="create post"
                    />
                    Edit
                </a>
                 <a className="dropdownmenu" onClick={handleDeletePost}>
                    <img
                        src="/trash.svg"
                        alt="create post"
                    />
                    Delete
                </a>
            </DropDownMenus>
        </DropDownContainer>
    )
}

export default DropDownMenu