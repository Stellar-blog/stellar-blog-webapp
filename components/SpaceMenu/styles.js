import styled from 'styled-components'

export const SpaceMenuContainer = styled.section`
    background-color: #f1f1f1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    flex-direction: column;
    border-radius: 1rem;
    height: fit-content;
    margin-top: 1rem;

    .profileContainer{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 12px 16px;

        img {
            border-radius: 1rem;
        }
    }

    .menu {
        padding: 12px 16px;
        text-align: center;
        cursor: pointer;
        border-top: 1px solid #c9c9c9;
    }

    .selected{
        background-color: #ddd;
    }

    .menu:hover {
        background-color: #ddd;
    }

    .not-available{
        color: #c9c9c9;
    }

    .lastmenu{
        border-radius: 0 0 1rem 1rem;
    }
`