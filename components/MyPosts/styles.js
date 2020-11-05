import styled from 'styled-components'

export const MyPostsContainer = styled.section`
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem;
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
//border-top: 2px solid #c9c9c9;