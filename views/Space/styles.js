import styled from 'styled-components'

export const MyPostsContainer = styled.section`
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem;

    @media only screen and (max-width: 600px) {
        margin-bottom: 0;
    }
`

export const NoPostsContainer = styled.section`
    background: #DDDDDD;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    padding: 2rem 0;

    img {
        width: 45%;
    }

    h2{
        color: #5f5f5f;
    }
`

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